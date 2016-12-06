/**
 * @fileoverview check if someone added a asMutable from seamless-immutable
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "check if someone added a asMutable from seamless-immutable",
            category: "Fill me in",
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        var UNWANTED_FUNCTION_NAME = 'asMutable';
        return {
            MemberExpression: function reportUnwantedName(node) {
                var functionName = node.property.name;

                if (functionName === UNWANTED_FUNCTION_NAME) {
                    context.report({
                        node: node,
                        message: [
                            'Please don\'t use ',
                            UNWANTED_FUNCTION_NAME,
                            '. We don\'t like it!'
                        ].join('')
                    });
                }
            }
        };
    }
};
