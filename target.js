var pxtTargetBundle = {
  "id": "phaserce",
  "name": "Phaser CE",
  "title": "MakeCode for Phaser CE",
  "corepkg": "core",
  "cloud": {
    "workspace": false,
    "packages": true
  },
  "bundleddirs": [
    "libs/core"
  ],
  "runtime": {
    "mathBlocks": true,
    "loopsBlocks": true,
    "logicBlocks": true,
    "variablesBlocks": true,
    "textBlocks": true,
    "functionBlocks": true,
    "listsBlocks": true
  },
  "simulator": {
    "autoRun": true
  },
  "appTheme": {
    "logoUrl": "/pxt-phaser-ce/",
    "homeUrl": "/pxt-phaser-ce/",
    "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
    "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
    "betaUrl": "https://makecode.com/",
    "docMenu": [
      {
        "name": "About",
        "path": "/pxt-phaser-ce/docs/about.html"
      },
      {
        "name": "Docs",
        "path": "/pxt-phaser-ce/docs/docs.html"
      }
    ],
    "coloredToolbox": true,
    "monacoToolbox": true,
    "invertedMenu": true,
    "showHomeScreen": true,
    "homeScreenHero": "data:image/png;base64,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",
    "blocklyOptions": {
      "grid": {
        "spacing": 45,
        "length": 7,
        "colour": "rgba(189, 195, 199, 0.30)",
        "snap": true
      }
    },
    "simAnimationEnter": "fly right in",
    "simAnimationExit": "fly right out",
    "monacoColors": {
      "editor.background": "#ecf0f1"
    },
    "TOC": [
      {
        "name": "About",
        "subitems": [],
        "path": "/about",
        "nextName": "Blocks",
        "nextPath": "/blocks"
      },
      {
        "name": "Blocks",
        "subitems": [
          {
            "name": "On Start",
            "subitems": [],
            "path": "/blocks/on-start",
            "prevName": "Blocks",
            "prevPath": "/blocks",
            "nextName": "Loops",
            "nextPath": "/blocks/loops"
          },
          {
            "name": "Loops",
            "subitems": [
              {
                "name": "repeat",
                "subitems": [],
                "path": "/blocks/loops/repeat",
                "prevName": "Loops",
                "prevPath": "/blocks/loops",
                "nextName": "for",
                "nextPath": "/blocks/loops/for"
              },
              {
                "name": "for",
                "subitems": [],
                "path": "/blocks/loops/for",
                "prevName": "repeat",
                "prevPath": "/blocks/loops/repeat",
                "nextName": "while",
                "nextPath": "/blocks/loops/while"
              },
              {
                "name": "while",
                "subitems": [],
                "path": "/blocks/loops/while",
                "prevName": "for",
                "prevPath": "/blocks/loops/for",
                "nextName": "Logic",
                "nextPath": "/blocks/logic"
              }
            ],
            "path": "/blocks/loops",
            "prevName": "On Start",
            "prevPath": "/blocks/on-start",
            "nextName": "repeat",
            "nextPath": "/blocks/loops/repeat"
          },
          {
            "name": "Logic",
            "subitems": [
              {
                "name": "if",
                "subitems": [],
                "path": "/blocks/logic/if",
                "prevName": "Logic",
                "prevPath": "/blocks/logic",
                "nextName": "Boolean",
                "nextPath": "/blocks/logic/boolean"
              },
              {
                "name": "Boolean",
                "subitems": [],
                "path": "/blocks/logic/boolean",
                "prevName": "if",
                "prevPath": "/blocks/logic/if",
                "nextName": "Variables",
                "nextPath": "/blocks/variables"
              }
            ],
            "path": "/blocks/logic",
            "prevName": "while",
            "prevPath": "/blocks/loops/while",
            "nextName": "if",
            "nextPath": "/blocks/logic/if"
          },
          {
            "name": "Variables",
            "subitems": [
              {
                "name": "assign",
                "subitems": [],
                "path": "/blocks/variables/assign",
                "prevName": "Variables",
                "prevPath": "/blocks/variables",
                "nextName": "change var",
                "nextPath": "/blocks/variables/change"
              },
              {
                "name": "change var",
                "subitems": [],
                "path": "/blocks/variables/change",
                "prevName": "assign",
                "prevPath": "/blocks/variables/assign",
                "nextName": "var",
                "nextPath": "/blocks/variables/var"
              },
              {
                "name": "var",
                "subitems": [],
                "path": "/blocks/variables/var",
                "prevName": "change var",
                "prevPath": "/blocks/variables/change",
                "nextName": "Math",
                "nextPath": "/blocks/math"
              }
            ],
            "path": "/blocks/variables",
            "prevName": "Boolean",
            "prevPath": "/blocks/logic/boolean",
            "nextName": "assign",
            "nextPath": "/blocks/variables/assign"
          },
          {
            "name": "Math",
            "subitems": [],
            "path": "/blocks/math",
            "prevName": "var",
            "prevPath": "/blocks/variables/var",
            "nextName": "JavaScript blocks",
            "nextPath": "/blocks/javascript-blocks"
          },
          {
            "name": "JavaScript blocks",
            "subitems": [],
            "path": "/blocks/javascript-blocks",
            "prevName": "Math",
            "prevPath": "/blocks/math",
            "nextName": "Custom blocks",
            "nextPath": "/blocks/custom"
          },
          {
            "name": "Custom blocks",
            "subitems": [],
            "path": "/blocks/custom",
            "prevName": "JavaScript blocks",
            "prevPath": "/blocks/javascript-blocks",
            "nextName": "JavaScript",
            "nextPath": "/javascript"
          }
        ],
        "path": "/blocks",
        "prevName": "About",
        "prevPath": "/about",
        "nextName": "On Start",
        "nextPath": "/blocks/on-start"
      },
      {
        "name": "JavaScript",
        "subitems": [
          {
            "name": "Calling",
            "subitems": [],
            "path": "/javascript/call",
            "prevName": "JavaScript",
            "prevPath": "/javascript",
            "nextName": "Sequencing",
            "nextPath": "/javascript/sequence"
          },
          {
            "name": "Sequencing",
            "subitems": [],
            "path": "/javascript/sequence",
            "prevName": "Calling",
            "prevPath": "/javascript/call",
            "nextName": "Variables",
            "nextPath": "/javascript/variables"
          },
          {
            "name": "Variables",
            "subitems": [],
            "path": "/javascript/variables",
            "prevName": "Sequencing",
            "prevPath": "/javascript/sequence",
            "nextName": "Operators",
            "nextPath": "/javascript/operators"
          },
          {
            "name": "Operators",
            "subitems": [],
            "path": "/javascript/operators",
            "prevName": "Variables",
            "prevPath": "/javascript/variables",
            "nextName": "Statements",
            "nextPath": "/javascript/statements"
          },
          {
            "name": "Statements",
            "subitems": [],
            "path": "/javascript/statements",
            "prevName": "Operators",
            "prevPath": "/javascript/operators",
            "nextName": "Functions",
            "nextPath": "/javascript/functions"
          },
          {
            "name": "Functions",
            "subitems": [],
            "path": "/javascript/functions",
            "prevName": "Statements",
            "prevPath": "/javascript/statements",
            "nextName": "Types",
            "nextPath": "/javascript/types"
          },
          {
            "name": "Types",
            "subitems": [],
            "path": "/javascript/types",
            "prevName": "Functions",
            "prevPath": "/javascript/functions",
            "nextName": "Classes",
            "nextPath": "/javascript/classes"
          },
          {
            "name": "Classes",
            "subitems": [],
            "path": "/javascript/classes",
            "prevName": "Types",
            "prevPath": "/javascript/types",
            "nextName": "Interfaces",
            "nextPath": "/javascript/interfaces"
          },
          {
            "name": "Interfaces",
            "subitems": [],
            "path": "/javascript/interfaces",
            "prevName": "Classes",
            "prevPath": "/javascript/classes",
            "nextName": "Generics",
            "nextPath": "/javascript/generics"
          },
          {
            "name": "Generics",
            "subitems": [],
            "path": "/javascript/generics",
            "prevName": "Interfaces",
            "prevPath": "/javascript/interfaces",
            "nextName": "Types",
            "nextPath": "/types"
          }
        ],
        "path": "/javascript",
        "prevName": "Custom blocks",
        "prevPath": "/blocks/custom",
        "nextName": "Calling",
        "nextPath": "/javascript/call"
      },
      {
        "name": "Types",
        "subitems": [
          {
            "name": "Number",
            "subitems": [],
            "path": "/types/number",
            "prevName": "Types",
            "prevPath": "/types",
            "nextName": "String",
            "nextPath": "/types/string"
          },
          {
            "name": "String",
            "subitems": [],
            "path": "/types/string",
            "prevName": "Number",
            "prevPath": "/types/number",
            "nextName": "Boolean",
            "nextPath": "/types/boolean"
          },
          {
            "name": "Boolean",
            "subitems": [],
            "path": "/types/boolean",
            "prevName": "String",
            "prevPath": "/types/string",
            "nextName": "Array",
            "nextPath": "/types/array"
          },
          {
            "name": "Array",
            "subitems": [],
            "path": "/types/array",
            "prevName": "Boolean",
            "prevPath": "/types/boolean",
            "nextName": "Function",
            "nextPath": "/types/function"
          },
          {
            "name": "Function",
            "subitems": [],
            "path": "/types/function",
            "prevName": "Array",
            "prevPath": "/types/array",
            "nextName": "About",
            "nextPath": "/about"
          }
        ],
        "path": "/types",
        "prevName": "Generics",
        "prevPath": "/javascript/generics",
        "nextName": "Number",
        "nextPath": "/types/number"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "About",
            "subitems": [],
            "path": "/about",
            "prevName": "Function",
            "prevPath": "/types/function",
            "nextName": "Support",
            "nextPath": "/support"
          },
          {
            "name": "Support",
            "subitems": [],
            "path": "/support",
            "prevName": "About",
            "prevPath": "/about",
            "nextName": "FAQ",
            "nextPath": "/faq"
          },
          {
            "name": "FAQ",
            "subitems": [],
            "path": "/faq",
            "prevName": "Support",
            "prevPath": "/support",
            "nextName": "Translate",
            "nextPath": "/translate"
          },
          {
            "name": "Translate",
            "subitems": [],
            "path": "/translate",
            "prevName": "FAQ",
            "prevPath": "/faq",
            "nextName": "Sharing projects",
            "nextPath": "/share"
          },
          {
            "name": "Sharing projects",
            "subitems": [],
            "path": "/share",
            "prevName": "Translate",
            "prevPath": "/translate",
            "nextName": "Offline support",
            "nextPath": "/offline"
          },
          {
            "name": "Offline support",
            "subitems": [],
            "path": "/offline",
            "prevName": "Sharing projects",
            "prevPath": "/share",
            "nextName": "Command Line Interface",
            "nextPath": "/cli"
          }
        ],
        "prevName": "Function",
        "prevPath": "/types/function"
      },
      {
        "name": "",
        "subitems": [
          {
            "name": "Command Line Interface",
            "subitems": [],
            "path": "/cli",
            "prevName": "Offline support",
            "prevPath": "/offline",
            "nextName": "Visual Studio Code support",
            "nextPath": "/code"
          },
          {
            "name": "Visual Studio Code support",
            "subitems": [],
            "path": "/code",
            "prevName": "Command Line Interface",
            "prevPath": "/cli",
            "nextName": "Blocks Embed",
            "nextPath": "/blocks-embed"
          },
          {
            "name": "Blocks Embed",
            "subitems": [],
            "path": "/blocks-embed",
            "prevName": "Visual Studio Code support",
            "prevPath": "/code"
          }
        ],
        "prevName": "Offline support",
        "prevPath": "/offline"
      }
    ],
    "embedUrl": "http://microsoft.github.io/pxt-phaser-ce/",
    "id": "phaserce",
    "title": "MakeCode for Phaser CE",
    "name": "Phaser CE",
    "homeScreenHeroCDN": "@cdnUrl@/blob/6c9689d39f7e9531f0e0e05a74cc408098e4a07d/static/hero.png",
    "htmlDocIncludes": {}
  },
  "blocksprj": {
    "id": "blocksprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.blocks",
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
      "main.ts": " ",
      "README.md": " "
    }
  },
  "tsprj": {
    "id": "tsprj",
    "config": {
      "name": "{0}",
      "dependencies": {
        "core": "*"
      },
      "description": "",
      "files": [
        "main.ts",
        "README.md"
      ]
    },
    "files": {
      "main.ts": " ",
      "README.md": " "
    }
  },
  "bundledpkgs": {
    "core": {
      "README.md": "# basic\n\nAdd your docs here...",
      "enums.d.ts": "\n",
      "ns.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\nnamespace turtle {\n\n}\n\n/**\n * Control flow\n */\n//% color=#FF5722 weight=90\nnamespace control {\n\n}\n",
      "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    push(item: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockGap=64\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start: number, end: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=15\n    //% blockId=\"array_removeat\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    // This block is currently disabled, as it does not compile in some targets\n    // Add % sign back to the block annotation to re-enable\n    /** Returns a value indicating if the string is empty */\n    //% shim=String_::isEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    // block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseInt(text: string): number;\n\ninterface Object { }\ninterface Function { }\ninterface IArguments { }\ninterface RegExp { }\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=Boolean_::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"Text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode\n    //% weight=0\n    //% blockNamespace=\"Text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\" weight=1\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=Number_::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n",
      "pxt-helpers.ts": "type Action = () => void;\n\nnamespace helpers {\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn) {\n            //TODO: support native strings and number sorting\n            /* callbackfn = function (value1: string, value2: string) : number {\n                return value1.compare(value2);\n                }*/\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arraySlice<T>(arr: T[], start: number, end: number): T[] {\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        const sliceLength = end - start;\n\n        for (let i = 0; i < sliceLength; ++i) {\n            const index = i + start;\n            if (index >= len) {\n                break;\n            }\n            res.push(arr[index]);\n        }\n        return res;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n}\n",
      "pxt.json": "{\n  \"name\": \"core\",\n  \"description\": \"A target sample for PXT\",\n  \"files\": [\n    \"README.md\",\n    \"pxt-core.d.ts\",\n    \"pxt-helpers.ts\",\n    \"enums.d.ts\",\n    \"sims.d.ts\",\n    \"ns.ts\"\n  ],\n  \"testFiles\": [\n    \"test.ts\"\n  ],\n  \"public\": true,\n  \"dependencies\": {}\n}",
      "sims.d.ts": "\n",
      "test.ts": ""
    }
  },
  "compile": {
    "isNative": false,
    "hasHex": false,
    "floatingPoint": true
  },
  "versions": {
    "target": "0.0.3",
    "pxt": "3.4.12"
  }
}