(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'lua55', function (exports) {
  'use strict';

  exports.name = 'lua55';
  exports.spec = [
    {
      "source": "global x = 5",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "x",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 5,
                "raw": "5",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
                ]
              }
            ],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "range": [
              0,
              12
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "range": [
          0,
          12
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "x",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x, y = 1, 2",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "x",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "y",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
                  11
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  14,
                  15
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 17
                  },
                  "end": {
                    "line": 1,
                    "column": 18
                  }
                },
                "range": [
                  17,
                  18
                ]
              }
            ],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 18
              }
            },
            "range": [
              0,
              18
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 18
          }
        },
        "range": [
          0,
          18
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "x",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "y",
            "loc": {
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              10,
              11
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "x",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ],
                "isLocal": false
              }
            ],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              0,
              8
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "range": [
          0,
          8
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "x",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x, y",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "x",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "y",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
                  11
                ],
                "isLocal": false
              }
            ],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              0,
              11
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 11
          }
        },
        "range": [
          0,
          11
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "x",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "y",
            "loc": {
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              10,
              11
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function foo() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                16,
                19
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [],
            "body": [],
            "isGlobal": true,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 25
              }
            },
            "range": [
              0,
              25
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 25
          }
        },
        "range": [
          0,
          25
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              16,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function foo(a) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                16,
                19
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 20
                  },
                  "end": {
                    "line": 1,
                    "column": 21
                  }
                },
                "range": [
                  20,
                  21
                ],
                "isLocal": true
              }
            ],
            "body": [],
            "isGlobal": true,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 26
              }
            },
            "range": [
              0,
              26
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              16,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function foo(...) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                16,
                19
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 20
                  },
                  "end": {
                    "line": 1,
                    "column": 23
                  }
                },
                "range": [
                  20,
                  23
                ]
              }
            ],
            "body": [],
            "isGlobal": true,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 28
              }
            },
            "range": [
              0,
              28
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 28
          }
        },
        "range": [
          0,
          28
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              16,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function foo(...args) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                16,
                19
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...args",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 20
                  },
                  "end": {
                    "line": 1,
                    "column": 27
                  }
                },
                "range": [
                  20,
                  27
                ],
                "name": "args"
              }
            ],
            "body": [],
            "isGlobal": true,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 32
              }
            },
            "range": [
              0,
              32
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 32
          }
        },
        "range": [
          0,
          32
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              16,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function foo(a, ...args) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 16
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                16,
                19
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 20
                  },
                  "end": {
                    "line": 1,
                    "column": 21
                  }
                },
                "range": [
                  20,
                  21
                ],
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...args",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 23
                  },
                  "end": {
                    "line": 1,
                    "column": 30
                  }
                },
                "range": [
                  23,
                  30
                ],
                "name": "args"
              }
            ],
            "body": [],
            "isGlobal": true,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 35
              }
            },
            "range": [
              0,
              35
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 35
          }
        },
        "range": [
          0,
          35
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              16,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(...args) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...args",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 18
                  }
                },
                "range": [
                  11,
                  18
                ],
                "name": "args"
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 23
              }
            },
            "range": [
              0,
              23
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 23
          }
        },
        "range": [
          0,
          23
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "f",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(a, ...args) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "f",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
                ],
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...args",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 21
                  }
                },
                "range": [
                  14,
                  21
                ],
                "name": "args"
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 26
              }
            },
            "range": [
              0,
              26
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "f",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "function f(...args, x) end",
      "result": "[1:18] ')' expected near ','",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global",
      "result": "[1:6] <name>, '*' or 'function' expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function",
      "result": "[1:15] <name> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global 1",
      "result": "[1:7] <name>, '*' or 'function' expected near '1'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global x,",
      "result": "[1:9] <name> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global function foo(...args, x) end",
      "result": "[1:27] ')' expected near ','",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> a",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              }
            ],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              0,
              16
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 16
          }
        },
        "range": [
          0,
          16
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              15,
              16
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global a <const>",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 8
                    }
                  },
                  "range": [
                    7,
                    8
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 9
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    9,
                    16
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  7,
                  16
                ]
              }
            ],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              0,
              16
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 16
          }
        },
        "range": [
          0,
          16
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> a, b, c",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              },
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 18
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    18,
                    19
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  18,
                  19
                ]
              },
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 21
                    },
                    "end": {
                      "line": 1,
                      "column": 22
                    }
                  },
                  "range": [
                    21,
                    22
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 21
                  },
                  "end": {
                    "line": 1,
                    "column": 22
                  }
                },
                "range": [
                  21,
                  22
                ]
              }
            ],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 22
              }
            },
            "range": [
              0,
              22
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 22
          }
        },
        "range": [
          0,
          22
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              15,
              16
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              18,
              19
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 21
              },
              "end": {
                "line": 1,
                "column": 22
              }
            },
            "range": [
              21,
              22
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> a, b <const>",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              },
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 18
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    18,
                    19
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 27
                    }
                  },
                  "range": [
                    20,
                    27
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 27
                  }
                },
                "range": [
                  18,
                  27
                ]
              }
            ],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 27
              }
            },
            "range": [
              0,
              27
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 27
          }
        },
        "range": [
          0,
          27
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              15,
              16
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              18,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> a = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 19
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  19,
                  20
                ]
              }
            ],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 20
              }
            },
            "range": [
              0,
              20
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 20
          }
        },
        "range": [
          0,
          20
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              15,
              16
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> a, b = 1, 2",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              },
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 18
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    18,
                    19
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  18,
                  19
                ]
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 22
                  },
                  "end": {
                    "line": 1,
                    "column": 23
                  }
                },
                "range": [
                  22,
                  23
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 25
                  },
                  "end": {
                    "line": 1,
                    "column": 26
                  }
                },
                "range": [
                  25,
                  26
                ]
              }
            ],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 26
              }
            },
            "range": [
              0,
              26
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              15,
              16
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              18,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> *",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [],
            "init": [],
            "attribute": {
              "type": "Attribute",
              "name": "const",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 7
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                7,
                14
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              0,
              16
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 16
          }
        },
        "range": [
          0,
          16
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global *",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [],
            "init": [],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              0,
              8
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "range": [
          0,
          8
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <close> a",
      "result": "[1:16] 'close' attribute is not allowed for global variables",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <close> *",
      "result": "[1:16] 'close' attribute is not allowed for global variables",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global a <close>",
      "result": "[1:16] 'close' attribute is not allowed for global variables",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <unknown> a",
      "result": "[1:8] unknown attribute 'unknown'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    },
    {
      "source": "global <const> a, b <const> = 1, 2",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GlobalStatement",
            "variables": [
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 7
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    7,
                    14
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
                ]
              },
              {
                "type": "IdentifierWithAttribute",
                "name": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 18
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    18,
                    19
                  ],
                  "isLocal": false
                },
                "attribute": {
                  "type": "Attribute",
                  "name": "const",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 27
                    }
                  },
                  "range": [
                    20,
                    27
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 27
                  }
                },
                "range": [
                  18,
                  27
                ]
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 30
                  },
                  "end": {
                    "line": 1,
                    "column": 31
                  }
                },
                "range": [
                  30,
                  31
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 33
                  },
                  "end": {
                    "line": 1,
                    "column": 34
                  }
                },
                "range": [
                  33,
                  34
                ]
              }
            ],
            "attribute": null,
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 34
              }
            },
            "range": [
              0,
              34
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 34
          }
        },
        "range": [
          0,
          34
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 16
              }
            },
            "range": [
              15,
              16
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              18,
              19
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.5"
      }
    }
  ];
}));
