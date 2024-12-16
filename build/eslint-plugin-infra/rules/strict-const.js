export default {
  meta: {
    messages: {
      withoutGlobalThis: 'Wrong usage of buildtime const, please use {{name}} without globalThis',
      withGlobalThis: 'Wrong usage of runtime const, please use globalThis.{{name}}'
    },
    schema: {
      type: "array"
    }
  },
  create(context) {
    // rule implementation ...
    return {
      // MemberExpression(node) {
      //   console.log("!!!")
      //   console.dir(node)

      //   context.report({
      //     node,
      //     message: "error!!!"
      //   })
      // },
      Identifier(node) {
        const reg = /([A-Z_]*)/;
        const res = node.name.match(reg);
        const globalVars = context.options[0][0];

        const isIncluded = Object.keys(globalVars).find(key => key == node.name)
        // console.log(context.options[0][0]);

        if (res.length <= 1 || res[1] != node.name) {
          return;
        }

        // if (node.name == "ENVIRONMENT") {
        //   console.dir(node)
        //   console.dir(node.parent)
        // }

        if (node.parent.object?.name == "globalThis" && isIncluded) {
          context.report({
            node,
            messageId: "withoutGlobalThis",
            data: {
              name: node.name
            }
          })
        } else if (node.parent.type == "VariableDeclarator" && !isIncluded) {
          context.report({
            node,
            messageId: "withGlobalThis",
            data: {
              name: node.name
            }
          })
        }
        // if (res.length > 1 && res[1] == node.name) {
        // if (isIncluded) {
        //   console.log("!!!", node.parent.object)
        //   console.dir(node)

        //   context.report({
        //     node,
        //     messageId: "withoutGlobalThis",
        //     data: {
        //       name: node.name
        //     }
        //   })

        // }
      }
    }
  }
}
