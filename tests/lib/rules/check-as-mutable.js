/**
 * @fileoverview check if someone added a asMutable from seamless-immutable
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/check-as-mutable"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("check-as-mutable", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var mutableArray = Immutable([&#34;hello&#34;, &#34;world&#34;]).asMutable();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
