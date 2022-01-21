export const todoContractAddress = {
  "address": "0xcC071bB9747B8037542d2d74CAb45b2677E53BCA"
}

export const todoContract = {
  "contractName": "Todo",
  "abi": [
    {
      "inputs": [],
      "name": "todoCount",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getAllTodos",
      "outputs": [
        {
          "components": [
            {
              "internalType": "int256",
              "name": "id",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "todoContent",
              "type": "string"
            }
          ],
          "internalType": "struct Todo.TodoItem[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_todoContent",
          "type": "string"
        }
      ],
      "name": "addTodo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_todoContent\",\"type\":\"string\"}],\"name\":\"addTodo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"getAllTodos\",\"outputs\":[{\"components\":[{\"internalType\":\"int256\",\"name\":\"id\",\"type\":\"int256\"},{\"internalType\":\"string\",\"name\":\"todoContent\",\"type\":\"string\"}],\"internalType\":\"struct Todo.TodoItem[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"todoCount\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"users\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Todo.sol\":\"Todo\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Todo.sol\":{\"keccak256\":\"0xf76d8912735b0e0ec29eb857a0d8a7600b69316172d48a620bd301270c05ff05\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://61348c2660e65bae209d401cec388d5cd47dfb42d24a5bfdeb02d57050bdd1ef\",\"dweb:/ipfs/QmT8bYXYdqznXsHniatsTQCZqqVwmUHemx8XV2PsxSEEub\"]}},\"version\":1}",
  "bytecode": "0x60806040526000805534801561001457600080fd5b50610941806100246000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633260a5d014610051578063614f31801461006d578063a87430ba1461009d578063fe0dee17146100cd575b600080fd5b61006b60048036038101906100669190610593565b6100eb565b005b610087600480360381019061008291906105ef565b6101b7565b60405161009491906107bc565b60405180910390f35b6100b760048036038101906100b291906105ef565b6102f4565b6040516100c491906107ed565b60405180910390f35b6100d5610332565b6040516100e29190610817565b60405180910390f35b600060405180604001604052806000548152602001838152509050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001019080519060200190610198929190610338565b5050506000808154809291906101ad90610861565b9190505550505050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156102e9578382906000526020600020906002020160405180604001604052908160008201548152602001600182018054610258906108d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610284906108d9565b80156102d15780601f106102a6576101008083540402835291602001916102d1565b820191906000526020600020905b8154815290600101906020018083116102b457829003601f168201915b5050505050815250508152602001906001019061021b565b505050509050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081565b60005481565b828054610344906108d9565b90600052602060002090601f01602090048101928261036657600085556103ad565b82601f1061037f57805160ff19168380011785556103ad565b828001600101855582156103ad579182015b828111156103ac578251825591602001919060010190610391565b5b5090506103ba91906103be565b5090565b5b808211156103d75760008160009055506001016103bf565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061041a826103ef565b9050919050565b61042a8161040f565b811461043557600080fd5b50565b60008135905061044781610421565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104a082610457565b810181811067ffffffffffffffff821117156104bf576104be610468565b5b80604052505050565b60006104d26103db565b90506104de8282610497565b919050565b600067ffffffffffffffff8211156104fe576104fd610468565b5b61050782610457565b9050602081019050919050565b82818337600083830152505050565b6000610536610531846104e3565b6104c8565b90508281526020810184848401111561055257610551610452565b5b61055d848285610514565b509392505050565b600082601f83011261057a5761057961044d565b5b813561058a848260208601610523565b91505092915050565b600080604083850312156105aa576105a96103e5565b5b60006105b885828601610438565b925050602083013567ffffffffffffffff8111156105d9576105d86103ea565b5b6105e585828601610565565b9150509250929050565b600060208284031215610605576106046103e5565b5b600061061384828501610438565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b61065b81610648565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561069b578082015181840152602081019050610680565b838111156106aa576000848401525b50505050565b60006106bb82610661565b6106c5818561066c565b93506106d581856020860161067d565b6106de81610457565b840191505092915050565b60006040830160008301516107016000860182610652565b506020830151848203602086015261071982826106b0565b9150508091505092915050565b600061073283836106e9565b905092915050565b6000602082019050919050565b60006107528261061c565b61075c8185610627565b93508360208202850161076e85610638565b8060005b858110156107aa578484038952815161078b8582610726565b94506107968361073a565b925060208a01995050600181019050610772565b50829750879550505050505092915050565b600060208201905081810360008301526107d68184610747565b905092915050565b6107e78161040f565b82525050565b600060208201905061080260008301846107de565b92915050565b61081181610648565b82525050565b600060208201905061082c6000830184610808565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061086c82610648565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561089f5761089e610832565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108f157607f821691505b60208210811415610905576109046108aa565b5b5091905056fea2646970667358221220712c917517057ebcf83080905150d50fcf4dda82d9a361e33ec82d8941d2006b64736f6c634300080b0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80633260a5d014610051578063614f31801461006d578063a87430ba1461009d578063fe0dee17146100cd575b600080fd5b61006b60048036038101906100669190610593565b6100eb565b005b610087600480360381019061008291906105ef565b6101b7565b60405161009491906107bc565b60405180910390f35b6100b760048036038101906100b291906105ef565b6102f4565b6040516100c491906107ed565b60405180910390f35b6100d5610332565b6040516100e29190610817565b60405180910390f35b600060405180604001604052806000548152602001838152509050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001019080519060200190610198929190610338565b5050506000808154809291906101ad90610861565b9190505550505050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156102e9578382906000526020600020906002020160405180604001604052908160008201548152602001600182018054610258906108d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610284906108d9565b80156102d15780601f106102a6576101008083540402835291602001916102d1565b820191906000526020600020905b8154815290600101906020018083116102b457829003601f168201915b5050505050815250508152602001906001019061021b565b505050509050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081565b60005481565b828054610344906108d9565b90600052602060002090601f01602090048101928261036657600085556103ad565b82601f1061037f57805160ff19168380011785556103ad565b828001600101855582156103ad579182015b828111156103ac578251825591602001919060010190610391565b5b5090506103ba91906103be565b5090565b5b808211156103d75760008160009055506001016103bf565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061041a826103ef565b9050919050565b61042a8161040f565b811461043557600080fd5b50565b60008135905061044781610421565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104a082610457565b810181811067ffffffffffffffff821117156104bf576104be610468565b5b80604052505050565b60006104d26103db565b90506104de8282610497565b919050565b600067ffffffffffffffff8211156104fe576104fd610468565b5b61050782610457565b9050602081019050919050565b82818337600083830152505050565b6000610536610531846104e3565b6104c8565b90508281526020810184848401111561055257610551610452565b5b61055d848285610514565b509392505050565b600082601f83011261057a5761057961044d565b5b813561058a848260208601610523565b91505092915050565b600080604083850312156105aa576105a96103e5565b5b60006105b885828601610438565b925050602083013567ffffffffffffffff8111156105d9576105d86103ea565b5b6105e585828601610565565b9150509250929050565b600060208284031215610605576106046103e5565b5b600061061384828501610438565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b61065b81610648565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561069b578082015181840152602081019050610680565b838111156106aa576000848401525b50505050565b60006106bb82610661565b6106c5818561066c565b93506106d581856020860161067d565b6106de81610457565b840191505092915050565b60006040830160008301516107016000860182610652565b506020830151848203602086015261071982826106b0565b9150508091505092915050565b600061073283836106e9565b905092915050565b6000602082019050919050565b60006107528261061c565b61075c8185610627565b93508360208202850161076e85610638565b8060005b858110156107aa578484038952815161078b8582610726565b94506107968361073a565b925060208a01995050600181019050610772565b50829750879550505050505092915050565b600060208201905081810360008301526107d68184610747565b905092915050565b6107e78161040f565b82525050565b600060208201905061080260008301846107de565b92915050565b61081181610648565b82525050565b600060208201905061082c6000830184610808565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061086c82610648565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561089f5761089e610832565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806108f157607f821691505b60208210811415610905576109046108aa565b5b5091905056fea2646970667358221220712c917517057ebcf83080905150d50fcf4dda82d9a361e33ec82d8941d2006b64736f6c634300080b0033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:10021:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:2",
                "type": ""
              }
            ],
            "src": "7:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:2"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:2"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:81:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:65:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "404:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "411:42:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "400:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:54:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:2",
                "type": ""
              }
            ],
            "src": "334:126:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "511:51:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "521:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "550:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "532:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "532:24:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "521:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "493:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "503:7:2",
                "type": ""
              }
            ],
            "src": "466:96:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "611:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "668:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "677:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "680:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "670:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "670:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "670:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "634:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "659:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "641:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "641:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "631:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "631:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "624:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "624:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "621:63:2"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "604:5:2",
                "type": ""
              }
            ],
            "src": "568:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "748:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "758:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "780:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "767:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "767:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "758:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "823:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "796:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "796:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "796:33:2"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "726:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "734:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "742:5:2",
                "type": ""
              }
            ],
            "src": "696:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "930:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "947:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "950:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "940:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "940:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "940:12:2"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "841:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1053:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1070:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1073:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1063:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1063:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1063:12:2"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "964:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1135:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1145:38:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1163:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1170:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1159:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1159:14:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1179:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "1175:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1175:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1155:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1155:28:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1145:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1118:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "1128:6:2",
                "type": ""
              }
            ],
            "src": "1087:102:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1223:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1240:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1243:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1233:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1233:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1233:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1337:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1340:4:2",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1330:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1330:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1330:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1361:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1364:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1354:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1354:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1354:15:2"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "1195:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1424:238:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1434:58:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1456:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "1486:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "1464:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1464:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1452:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1452:40:2"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "1438:10:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1603:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1605:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1605:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1605:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1546:10:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1558:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1543:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1543:34:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1582:10:2"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1594:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1579:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1579:22:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1540:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1540:62:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1537:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1641:2:2",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "1645:10:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1634:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1634:22:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1634:22:2"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1410:6:2",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1418:4:2",
                "type": ""
              }
            ],
            "src": "1381:281:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1709:88:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1719:30:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "1729:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1729:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1719:6:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1778:6:2"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "1786:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "1758:19:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1758:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1758:33:2"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1693:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1702:6:2",
                "type": ""
              }
            ],
            "src": "1668:129:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1870:241:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1975:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1977:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1977:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1977:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1947:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1955:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1944:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1944:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1941:56:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2007:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2037:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "2015:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2015:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "2007:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2081:23:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "2093:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2099:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2089:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2089:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "2081:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1854:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "1865:4:2",
                "type": ""
              }
            ],
            "src": "1803:308:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2168:103:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "2191:3:2"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "2196:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2201:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "2178:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2178:30:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2178:30:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "2249:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2254:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2245:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2245:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2263:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2238:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2238:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2238:27:2"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "2150:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "2155:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2160:6:2",
                "type": ""
              }
            ],
            "src": "2117:154:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2361:328:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2371:75:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2438:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2396:41:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2396:49:2"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2380:15:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2380:66:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "2371:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "2462:5:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2469:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2455:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2455:21:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2455:21:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2485:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "2500:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2507:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2496:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2496:16:2"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "2489:3:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2550:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "2552:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2552:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2552:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "2531:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2536:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2527:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2527:16:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2545:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2524:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2524:25:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2521:112:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "2666:3:2"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "2671:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2676:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2642:23:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2642:41:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2642:41:2"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "2334:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2339:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2347:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2355:5:2",
                "type": ""
              }
            ],
            "src": "2277:412:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2771:278:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2820:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "2822:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2822:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2822:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2799:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2807:4:2",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2795:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2795:17:2"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2814:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2791:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2791:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2784:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2784:35:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2781:122:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2912:34:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2939:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2926:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2926:20:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2916:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2955:88:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3016:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3024:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3012:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3012:17:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3031:6:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3039:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2964:47:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2964:79:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "2955:5:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2749:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2757:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2765:5:2",
                "type": ""
              }
            ],
            "src": "2709:340:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3148:561:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3194:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3196:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3196:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3196:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3169:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3178:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3165:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3165:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3190:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3161:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3161:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3158:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3287:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3302:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3316:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3306:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3331:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3366:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3377:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3362:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3362:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3386:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3341:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3341:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3331:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3414:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3429:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3460:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3471:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3456:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3456:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3443:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3443:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3433:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3522:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "3524:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3524:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3524:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3494:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3502:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3491:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3491:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3488:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3619:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3664:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3675:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3660:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3660:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3684:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3629:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3629:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "3619:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3110:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3121:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3133:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3141:6:2",
                "type": ""
              }
            ],
            "src": "3055:654:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3781:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3827:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3829:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3829:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3829:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3802:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3811:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3798:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3798:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3823:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3794:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3794:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3791:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3920:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3935:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3949:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3939:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3964:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3999:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4010:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3995:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3995:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4019:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3974:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3974:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3964:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3751:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3762:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3774:6:2",
                "type": ""
              }
            ],
            "src": "3715:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4148:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4159:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4175:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4169:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4169:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "4159:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4131:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4141:6:2",
                "type": ""
              }
            ],
            "src": "4050:138:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4329:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4346:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4351:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4339:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4339:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4339:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4367:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4386:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4391:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4382:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4382:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "4367:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4301:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4306:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "4317:11:2",
                "type": ""
              }
            ],
            "src": "4194:208:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4504:60:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4514:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "4522:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "4514:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4535:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "4547:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4552:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4543:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4543:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "4535:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "4491:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "4499:4:2",
                "type": ""
              }
            ],
            "src": "4408:156:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4614:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4624:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4635:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4624:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4596:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4606:7:2",
                "type": ""
              }
            ],
            "src": "4570:76:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4705:52:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4722:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4744:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "4727:16:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4727:23:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4715:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4715:36:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4715:36:2"
                }
              ]
            },
            "name": "abi_encode_t_int256_to_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4693:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4700:3:2",
                "type": ""
              }
            ],
            "src": "4652:105:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4822:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4833:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4849:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4843:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4843:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "4833:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4805:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4815:6:2",
                "type": ""
              }
            ],
            "src": "4763:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4954:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4971:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4976:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4964:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4964:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4964:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4992:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5011:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5016:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5007:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5007:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "4992:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4926:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4931:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "4942:11:2",
                "type": ""
              }
            ],
            "src": "4868:159:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5082:258:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5092:10:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5101:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "5096:1:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5161:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "5186:3:2"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "5191:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5182:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5182:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "5205:3:2"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "5210:1:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5201:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5201:11:2"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "5195:5:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5195:18:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5175:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5175:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5175:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "5122:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5125:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "5119:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5119:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "5133:19:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5135:15:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "5144:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5147:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5140:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5140:10:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "5135:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "5115:3:2",
                    "statements": []
                  },
                  "src": "5111:113:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5258:76:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "5308:3:2"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "5313:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5304:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5304:16:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5322:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5297:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5297:27:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5297:27:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "5239:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5242:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5236:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5236:13:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5233:101:2"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "5064:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "5069:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5074:6:2",
                "type": ""
              }
            ],
            "src": "5033:307:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5428:262:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5438:53:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5485:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5452:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5452:39:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5442:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5500:68:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5556:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5561:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5507:48:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5507:61:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5500:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5603:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5610:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5599:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5599:16:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5617:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5622:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "5577:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5577:52:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5577:52:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5638:46:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5649:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5676:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "5654:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5654:29:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5645:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5645:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5638:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5409:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5416:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5424:3:2",
                "type": ""
              }
            ],
            "src": "5346:344:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5860:485:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5870:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5886:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5891:4:2",
                        "type": "",
                        "value": "0x40"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5882:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5882:14:2"
                  },
                  "variables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "5874:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5906:160:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5939:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "5969:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5976:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5965:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5965:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "5959:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5959:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "5943:12:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulIdentifier",
                            "src": "6027:12:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "6045:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6050:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6041:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6041:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_int256_to_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "5995:31:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5995:61:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5995:61:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6076:242:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6118:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "6148:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6155:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6144:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6144:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "6138:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6138:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "6122:12:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "6186:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6191:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6182:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6182:14:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nodeType": "YulIdentifier",
                                "src": "6202:4:2"
                              },
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "6208:3:2"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "6198:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6198:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6175:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6175:38:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6175:38:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6226:81:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulIdentifier",
                            "src": "6288:12:2"
                          },
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6302:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "6234:53:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6234:73:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6226:4:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6328:11:2",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "6335:4:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6328:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5839:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5846:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5855:3:2",
                "type": ""
              }
            ],
            "src": "5748:597:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6479:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6489:108:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6585:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6593:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "6503:81:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6503:94:2"
                  },
                  "variableNames": [
                    {
                      "name": "updatedPos",
                      "nodeType": "YulIdentifier",
                      "src": "6489:10:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6452:6:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6460:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updatedPos",
                "nodeType": "YulTypedName",
                "src": "6468:10:2",
                "type": ""
              }
            ],
            "src": "6351:252:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6708:38:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6718:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "6730:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6735:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6726:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6726:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "next",
                      "nodeType": "YulIdentifier",
                      "src": "6718:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "6695:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "next",
                "nodeType": "YulTypedName",
                "src": "6703:4:2",
                "type": ""
              }
            ],
            "src": "6609:137:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6980:931:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6990:92:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7076:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "7004:71:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7004:78:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6994:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7091:117:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7196:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7201:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7098:97:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7098:110:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7091:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7217:20:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "7234:3:2"
                  },
                  "variables": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "7221:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7246:39:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7262:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7271:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7279:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "7267:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7267:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7258:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7258:27:2"
                  },
                  "variables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "7250:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7294:95:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7383:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "7309:73:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7309:80:2"
                  },
                  "variables": [
                    {
                      "name": "baseRef",
                      "nodeType": "YulTypedName",
                      "src": "7298:7:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7398:21:2",
                  "value": {
                    "name": "baseRef",
                    "nodeType": "YulIdentifier",
                    "src": "7412:7:2"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "7402:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7488:378:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7509:3:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "7518:4:2"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7524:9:2"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "7514:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7514:20:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7502:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7502:33:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7502:33:2"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7548:34:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "7575:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "7569:5:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7569:13:2"
                        },
                        "variables": [
                          {
                            "name": "elementValue0",
                            "nodeType": "YulTypedName",
                            "src": "7552:13:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7595:120:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "elementValue0",
                              "nodeType": "YulIdentifier",
                              "src": "7695:13:2"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "7710:4:2"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "7603:91:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7603:112:2"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "7595:4:2"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7728:94:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "7815:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "7738:76:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7738:84:2"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7728:6:2"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7835:21:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7846:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7851:4:2",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7842:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7842:14:2"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7835:3:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "7450:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7453:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "7447:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7447:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "7461:18:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7463:14:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "7472:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7475:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7468:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7468:9:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "7463:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "7432:14:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7434:10:2",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7443:1:2",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "7438:1:2",
                            "type": ""
                          }
                        ]
                      }
                    ]
                  },
                  "src": "7428:438:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7875:11:2",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "7882:4:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7875:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7895:10:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "7902:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7895:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6959:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6966:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6975:3:2",
                "type": ""
              }
            ],
            "src": "6808:1103:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8113:273:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8123:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8135:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8146:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8131:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8131:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8123:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8170:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8181:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8166:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8166:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8189:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8195:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8185:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8185:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8159:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8159:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8159:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8215:164:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8365:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8374:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8223:141:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8223:156:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8215:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8085:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8097:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8108:4:2",
                "type": ""
              }
            ],
            "src": "7917:469:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8457:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8474:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "8497:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "8479:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8479:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8467:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8467:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8467:37:2"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8445:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8452:3:2",
                "type": ""
              }
            ],
            "src": "8392:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8614:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8624:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8636:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8647:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8632:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8632:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8624:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8704:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8717:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8728:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8713:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8713:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8660:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8660:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8660:71:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8586:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8598:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8609:4:2",
                "type": ""
              }
            ],
            "src": "8516:222:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8807:52:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8824:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "8846:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "8829:16:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8829:23:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8817:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8817:36:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8817:36:2"
                }
              ]
            },
            "name": "abi_encode_t_int256_to_t_int256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8795:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8802:3:2",
                "type": ""
              }
            ],
            "src": "8744:115:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8961:122:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8971:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8983:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8994:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8979:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8979:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8971:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "9049:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9062:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9073:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9058:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9058:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_int256_to_t_int256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9007:41:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9007:69:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9007:69:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8933:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8945:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8956:4:2",
                "type": ""
              }
            ],
            "src": "8865:218:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9117:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9134:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9137:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9127:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9127:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9127:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9231:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9234:4:2",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9224:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9224:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9224:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9255:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9258:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9248:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9248:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9248:15:2"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "9089:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9317:189:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9327:32:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9353:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_int256",
                      "nodeType": "YulIdentifier",
                      "src": "9336:16:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9336:23:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "9327:5:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9449:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "9451:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9451:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9451:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9374:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9381:66:2",
                        "type": "",
                        "value": "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "9371:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9371:77:2"
                  },
                  "nodeType": "YulIf",
                  "src": "9368:103:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9480:20:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9491:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9498:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9487:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9487:13:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "9480:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9303:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "9313:3:2",
                "type": ""
              }
            ],
            "src": "9275:231:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9540:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9557:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9560:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9550:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9550:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9550:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9654:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9657:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9647:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9647:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9647:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9678:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9681:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9671:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9671:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9671:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "9512:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9749:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9759:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "9773:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9779:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "9769:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9769:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "9759:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9790:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "9820:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9826:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "9816:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9816:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "9794:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9867:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9881:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "9895:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9903:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "9891:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9891:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "9881:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "9847:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "9840:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9840:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "9837:81:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9970:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "9984:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9984:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9984:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "9934:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "9957:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9965:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "9954:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9954:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "9931:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9931:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "9928:84:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "9733:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "9742:6:2",
                "type": ""
              }
            ],
            "src": "9698:320:2"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_int256_to_t_int256(value, pos) {\n        mstore(pos, cleanup_t_int256(value))\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    // struct Todo.TodoItem -> struct Todo.TodoItem\n    function abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(value, pos)  -> end  {\n        let tail := add(pos, 0x40)\n\n        {\n            // id\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_int256_to_t_int256(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // todoContent\n\n            let memberValue0 := mload(add(value, 0x20))\n\n            mstore(add(pos, 0x20), sub(tail, pos))\n            tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(memberValue0, tail)\n\n        }\n\n        end := tail\n    }\n\n    function abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(value0, pos) -> updatedPos {\n        updatedPos := abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(value0, pos)\n    }\n\n    function array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    // struct Todo.TodoItem[] -> struct Todo.TodoItem[]\n    function abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let headStart := pos\n        let tail := add(pos, mul(length, 0x20))\n        let baseRef := array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, sub(tail, headStart))\n            let elementValue0 := mload(srcPtr)\n            tail := abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(elementValue0, tail)\n            srcPtr := array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(srcPtr)\n            pos := add(pos, 0x20)\n        }\n        pos := tail\n        end := pos\n    }\n\n    function abi_encode_tuple_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_int256_to_t_int256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_int256(value))\n    }\n\n    function abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_int256_to_t_int256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_int256(value) -> ret {\n        value := cleanup_t_int256(value)\n        if eq(value, 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "66:548:1:-:0;;;110:1;84:27;;66:548;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "66:548:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;414:198;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;292:118;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;115:42;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;84:27;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;414:198;490:23;516:33;;;;;;;;525:9;;516:33;;;;536:12;516:33;;;490:59;;555:5;:15;561:8;555:15;;;;;;;;;;;;;;;:21;;582:7;555:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;596:9;;:11;;;;;;;;;:::i;:::-;;;;;;484:128;414:198;;:::o;292:118::-;352:17;384:5;:15;390:8;384:15;;;;;;;;;;;;;;;:21;;377:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;292:118;;;:::o;115:42::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;84:27::-;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:117::-;950:1;947;940:12;964:117;1073:1;1070;1063:12;1087:102;1128:6;1179:2;1175:7;1170:2;1163:5;1159:14;1155:28;1145:38;;1087:102;;;:::o;1195:180::-;1243:77;1240:1;1233:88;1340:4;1337:1;1330:15;1364:4;1361:1;1354:15;1381:281;1464:27;1486:4;1464:27;:::i;:::-;1456:6;1452:40;1594:6;1582:10;1579:22;1558:18;1546:10;1543:34;1540:62;1537:88;;;1605:18;;:::i;:::-;1537:88;1645:10;1641:2;1634:22;1424:238;1381:281;;:::o;1668:129::-;1702:6;1729:20;;:::i;:::-;1719:30;;1758:33;1786:4;1778:6;1758:33;:::i;:::-;1668:129;;;:::o;1803:308::-;1865:4;1955:18;1947:6;1944:30;1941:56;;;1977:18;;:::i;:::-;1941:56;2015:29;2037:6;2015:29;:::i;:::-;2007:37;;2099:4;2093;2089:15;2081:23;;1803:308;;;:::o;2117:154::-;2201:6;2196:3;2191;2178:30;2263:1;2254:6;2249:3;2245:16;2238:27;2117:154;;;:::o;2277:412::-;2355:5;2380:66;2396:49;2438:6;2396:49;:::i;:::-;2380:66;:::i;:::-;2371:75;;2469:6;2462:5;2455:21;2507:4;2500:5;2496:16;2545:3;2536:6;2531:3;2527:16;2524:25;2521:112;;;2552:79;;:::i;:::-;2521:112;2642:41;2676:6;2671:3;2666;2642:41;:::i;:::-;2361:328;2277:412;;;;;:::o;2709:340::-;2765:5;2814:3;2807:4;2799:6;2795:17;2791:27;2781:122;;2822:79;;:::i;:::-;2781:122;2939:6;2926:20;2964:79;3039:3;3031:6;3024:4;3016:6;3012:17;2964:79;:::i;:::-;2955:88;;2771:278;2709:340;;;;:::o;3055:654::-;3133:6;3141;3190:2;3178:9;3169:7;3165:23;3161:32;3158:119;;;3196:79;;:::i;:::-;3158:119;3316:1;3341:53;3386:7;3377:6;3366:9;3362:22;3341:53;:::i;:::-;3331:63;;3287:117;3471:2;3460:9;3456:18;3443:32;3502:18;3494:6;3491:30;3488:117;;;3524:79;;:::i;:::-;3488:117;3629:63;3684:7;3675:6;3664:9;3660:22;3629:63;:::i;:::-;3619:73;;3414:288;3055:654;;;;;:::o;3715:329::-;3774:6;3823:2;3811:9;3802:7;3798:23;3794:32;3791:119;;;3829:79;;:::i;:::-;3791:119;3949:1;3974:53;4019:7;4010:6;3999:9;3995:22;3974:53;:::i;:::-;3964:63;;3920:117;3715:329;;;;:::o;4050:138::-;4141:6;4175:5;4169:12;4159:22;;4050:138;;;:::o;4194:208::-;4317:11;4351:6;4346:3;4339:19;4391:4;4386:3;4382:14;4367:29;;4194:208;;;;:::o;4408:156::-;4499:4;4522:3;4514:11;;4552:4;4547:3;4543:14;4535:22;;4408:156;;;:::o;4570:76::-;4606:7;4635:5;4624:16;;4570:76;;;:::o;4652:105::-;4727:23;4744:5;4727:23;:::i;:::-;4722:3;4715:36;4652:105;;:::o;4763:99::-;4815:6;4849:5;4843:12;4833:22;;4763:99;;;:::o;4868:159::-;4942:11;4976:6;4971:3;4964:19;5016:4;5011:3;5007:14;4992:29;;4868:159;;;;:::o;5033:307::-;5101:1;5111:113;5125:6;5122:1;5119:13;5111:113;;;5210:1;5205:3;5201:11;5195:18;5191:1;5186:3;5182:11;5175:39;5147:2;5144:1;5140:10;5135:15;;5111:113;;;5242:6;5239:1;5236:13;5233:101;;;5322:1;5313:6;5308:3;5304:16;5297:27;5233:101;5082:258;5033:307;;;:::o;5346:344::-;5424:3;5452:39;5485:5;5452:39;:::i;:::-;5507:61;5561:6;5556:3;5507:61;:::i;:::-;5500:68;;5577:52;5622:6;5617:3;5610:4;5603:5;5599:16;5577:52;:::i;:::-;5654:29;5676:6;5654:29;:::i;:::-;5649:3;5645:39;5638:46;;5428:262;5346:344;;;;:::o;5748:597::-;5855:3;5891:4;5886:3;5882:14;5976:4;5969:5;5965:16;5959:23;5995:61;6050:4;6045:3;6041:14;6027:12;5995:61;:::i;:::-;5906:160;6155:4;6148:5;6144:16;6138:23;6208:3;6202:4;6198:14;6191:4;6186:3;6182:14;6175:38;6234:73;6302:4;6288:12;6234:73;:::i;:::-;6226:81;;6076:242;6335:4;6328:11;;5860:485;5748:597;;;;:::o;6351:252::-;6468:10;6503:94;6593:3;6585:6;6503:94;:::i;:::-;6489:108;;6351:252;;;;:::o;6609:137::-;6703:4;6735;6730:3;6726:14;6718:22;;6609:137;;;:::o;6808:1103::-;6975:3;7004:78;7076:5;7004:78;:::i;:::-;7098:110;7201:6;7196:3;7098:110;:::i;:::-;7091:117;;7234:3;7279:4;7271:6;7267:17;7262:3;7258:27;7309:80;7383:5;7309:80;:::i;:::-;7412:7;7443:1;7428:438;7453:6;7450:1;7447:13;7428:438;;;7524:9;7518:4;7514:20;7509:3;7502:33;7575:6;7569:13;7603:112;7710:4;7695:13;7603:112;:::i;:::-;7595:120;;7738:84;7815:6;7738:84;:::i;:::-;7728:94;;7851:4;7846:3;7842:14;7835:21;;7488:378;7475:1;7472;7468:9;7463:14;;7428:438;;;7432:14;7882:4;7875:11;;7902:3;7895:10;;6980:931;;;;;6808:1103;;;;:::o;7917:469::-;8108:4;8146:2;8135:9;8131:18;8123:26;;8195:9;8189:4;8185:20;8181:1;8170:9;8166:17;8159:47;8223:156;8374:4;8365:6;8223:156;:::i;:::-;8215:164;;7917:469;;;;:::o;8392:118::-;8479:24;8497:5;8479:24;:::i;:::-;8474:3;8467:37;8392:118;;:::o;8516:222::-;8609:4;8647:2;8636:9;8632:18;8624:26;;8660:71;8728:1;8717:9;8713:17;8704:6;8660:71;:::i;:::-;8516:222;;;;:::o;8744:115::-;8829:23;8846:5;8829:23;:::i;:::-;8824:3;8817:36;8744:115;;:::o;8865:218::-;8956:4;8994:2;8983:9;8979:18;8971:26;;9007:69;9073:1;9062:9;9058:17;9049:6;9007:69;:::i;:::-;8865:218;;;;:::o;9089:180::-;9137:77;9134:1;9127:88;9234:4;9231:1;9224:15;9258:4;9255:1;9248:15;9275:231;9313:3;9336:23;9353:5;9336:23;:::i;:::-;9327:32;;9381:66;9374:5;9371:77;9368:103;;;9451:18;;:::i;:::-;9368:103;9498:1;9491:5;9487:13;9480:20;;9275:231;;;:::o;9512:180::-;9560:77;9557:1;9550:88;9657:4;9654:1;9647:15;9681:4;9678:1;9671:15;9698:320;9742:6;9779:1;9773:4;9769:12;9759:22;;9826:1;9820:4;9816:12;9847:18;9837:81;;9903:4;9895:6;9891:17;9881:27;;9837:81;9965:2;9957:6;9954:14;9934:18;9931:38;9928:84;;;9984:18;;:::i;:::-;9928:84;9749:269;9698:320;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract Todo {\n  int256 public todoCount = 0;\n  mapping(address => UserTodos) public users;\n\n  struct TodoItem {\n    int256 id;\n    string todoContent;\n  }\n\n  struct UserTodos {\n    address user;\n    TodoItem[] todos;\n  }\n\n  function getAllTodos(address _address) public view returns (TodoItem[] memory) {\n    return users[_address].todos;\n  }\n\n  function addTodo(address _address, string memory _todoContent) public {\n    TodoItem memory newTodo = TodoItem(todoCount, _todoContent);\n    users[_address].todos.push(newTodo);\n    todoCount++;\n  }\n}",
  "sourcePath": "/home/egesabanci/Desktop/projects/blockchain/blockchain-deploy-tutorial/blockchain/contracts/Todo.sol",
  "ast": {
    "absolutePath": "project:/contracts/Todo.sol",
    "exportedSymbols": {
      "Todo": [
        97
      ]
    },
    "id": 98,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:32:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Todo",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 97,
        "linearizedBaseContracts": [
          97
        ],
        "name": "Todo",
        "nameLocation": "75:4:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "fe0dee17",
            "id": 37,
            "mutability": "mutable",
            "name": "todoCount",
            "nameLocation": "98:9:1",
            "nodeType": "VariableDeclaration",
            "scope": 97,
            "src": "84:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 35,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "84:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 36,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "110:1:1",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "a87430ba",
            "id": 42,
            "mutability": "mutable",
            "name": "users",
            "nameLocation": "152:5:1",
            "nodeType": "VariableDeclaration",
            "scope": 97,
            "src": "115:42:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
              "typeString": "mapping(address => struct Todo.UserTodos)"
            },
            "typeName": {
              "id": 41,
              "keyType": {
                "id": 38,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "123:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "115:29:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                "typeString": "mapping(address => struct Todo.UserTodos)"
              },
              "valueType": {
                "id": 40,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 39,
                  "name": "UserTodos",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54,
                  "src": "134:9:1"
                },
                "referencedDeclaration": 54,
                "src": "134:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_UserTodos_$54_storage_ptr",
                  "typeString": "struct Todo.UserTodos"
                }
              }
            },
            "visibility": "public"
          },
          {
            "canonicalName": "Todo.TodoItem",
            "id": 47,
            "members": [
              {
                "constant": false,
                "id": 44,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "191:2:1",
                "nodeType": "VariableDeclaration",
                "scope": 47,
                "src": "184:9:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 43,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "184:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 46,
                "mutability": "mutable",
                "name": "todoContent",
                "nameLocation": "206:11:1",
                "nodeType": "VariableDeclaration",
                "scope": 47,
                "src": "199:18:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 45,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "199:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "TodoItem",
            "nameLocation": "169:8:1",
            "nodeType": "StructDefinition",
            "scope": 97,
            "src": "162:60:1",
            "visibility": "public"
          },
          {
            "canonicalName": "Todo.UserTodos",
            "id": 54,
            "members": [
              {
                "constant": false,
                "id": 49,
                "mutability": "mutable",
                "name": "user",
                "nameLocation": "257:4:1",
                "nodeType": "VariableDeclaration",
                "scope": 54,
                "src": "249:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 48,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "249:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 53,
                "mutability": "mutable",
                "name": "todos",
                "nameLocation": "278:5:1",
                "nodeType": "VariableDeclaration",
                "scope": 54,
                "src": "267:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr",
                  "typeString": "struct Todo.TodoItem[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 51,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 50,
                      "name": "TodoItem",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47,
                      "src": "267:8:1"
                    },
                    "referencedDeclaration": 47,
                    "src": "267:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                      "typeString": "struct Todo.TodoItem"
                    }
                  },
                  "id": 52,
                  "nodeType": "ArrayTypeName",
                  "src": "267:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr",
                    "typeString": "struct Todo.TodoItem[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UserTodos",
            "nameLocation": "233:9:1",
            "nodeType": "StructDefinition",
            "scope": 97,
            "src": "226:62:1",
            "visibility": "public"
          },
          {
            "body": {
              "id": 68,
              "nodeType": "Block",
              "src": "371:39:1",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 63,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "384:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                          "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                        }
                      },
                      "id": 65,
                      "indexExpression": {
                        "id": 64,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56,
                        "src": "390:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "384:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                        "typeString": "struct Todo.UserTodos storage ref"
                      }
                    },
                    "id": 66,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "todos",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 53,
                    "src": "384:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                      "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 62,
                  "id": 67,
                  "nodeType": "Return",
                  "src": "377:28:1"
                }
              ]
            },
            "functionSelector": "614f3180",
            "id": 69,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAllTodos",
            "nameLocation": "301:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "mutability": "mutable",
                  "name": "_address",
                  "nameLocation": "321:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "313:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "312:18:1"
            },
            "returnParameters": {
              "id": 62,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "352:17:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Todo.TodoItem[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 59,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 58,
                        "name": "TodoItem",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 47,
                        "src": "352:8:1"
                      },
                      "referencedDeclaration": 47,
                      "src": "352:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                        "typeString": "struct Todo.TodoItem"
                      }
                    },
                    "id": 60,
                    "nodeType": "ArrayTypeName",
                    "src": "352:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr",
                      "typeString": "struct Todo.TodoItem[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "351:19:1"
            },
            "scope": 97,
            "src": "292:118:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 95,
              "nodeType": "Block",
              "src": "484:128:1",
              "statements": [
                {
                  "assignments": [
                    78
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78,
                      "mutability": "mutable",
                      "name": "newTodo",
                      "nameLocation": "506:7:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 95,
                      "src": "490:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                        "typeString": "struct Todo.TodoItem"
                      },
                      "typeName": {
                        "id": 77,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 76,
                          "name": "TodoItem",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47,
                          "src": "490:8:1"
                        },
                        "referencedDeclaration": 47,
                        "src": "490:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                          "typeString": "struct Todo.TodoItem"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 83,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 80,
                        "name": "todoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "525:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 81,
                        "name": "_todoContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 73,
                        "src": "536:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 79,
                      "name": "TodoItem",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "516:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_TodoItem_$47_storage_ptr_$",
                        "typeString": "type(struct Todo.TodoItem storage pointer)"
                      }
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "516:33:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                      "typeString": "struct Todo.TodoItem memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "490:59:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89,
                        "name": "newTodo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "582:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                          "typeString": "struct Todo.TodoItem memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                          "typeString": "struct Todo.TodoItem memory"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 84,
                            "name": "users",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "555:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                              "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                            }
                          },
                          "id": 86,
                          "indexExpression": {
                            "id": 85,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "561:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "555:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                            "typeString": "struct Todo.UserTodos storage ref"
                          }
                        },
                        "id": 87,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "todos",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 53,
                        "src": "555:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                          "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "555:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$_t_struct$_TodoItem_$47_storage_$returns$__$bound_to$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Todo.TodoItem storage ref[] storage pointer,struct Todo.TodoItem storage ref)"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "555:35:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "555:35:1"
                },
                {
                  "expression": {
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "596:11:1",
                    "subExpression": {
                      "id": 92,
                      "name": "todoCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37,
                      "src": "596:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 94,
                  "nodeType": "ExpressionStatement",
                  "src": "596:11:1"
                }
              ]
            },
            "functionSelector": "3260a5d0",
            "id": 96,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addTodo",
            "nameLocation": "423:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "_address",
                  "nameLocation": "439:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "431:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "_todoContent",
                  "nameLocation": "463:12:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "449:26:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "430:46:1"
            },
            "returnParameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "484:0:1"
            },
            "scope": 97,
            "src": "414:198:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 98,
        "src": "66:548:1",
        "usedErrors": []
      }
    ],
    "src": "32:582:1"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/Todo.sol",
    "exportedSymbols": {
      "Todo": [
        97
      ]
    },
    "id": 98,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:32:1"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Todo",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 97,
        "linearizedBaseContracts": [
          97
        ],
        "name": "Todo",
        "nameLocation": "75:4:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "fe0dee17",
            "id": 37,
            "mutability": "mutable",
            "name": "todoCount",
            "nameLocation": "98:9:1",
            "nodeType": "VariableDeclaration",
            "scope": 97,
            "src": "84:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int256",
              "typeString": "int256"
            },
            "typeName": {
              "id": 35,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "84:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 36,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "110:1:1",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "a87430ba",
            "id": 42,
            "mutability": "mutable",
            "name": "users",
            "nameLocation": "152:5:1",
            "nodeType": "VariableDeclaration",
            "scope": 97,
            "src": "115:42:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
              "typeString": "mapping(address => struct Todo.UserTodos)"
            },
            "typeName": {
              "id": 41,
              "keyType": {
                "id": 38,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "123:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "115:29:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                "typeString": "mapping(address => struct Todo.UserTodos)"
              },
              "valueType": {
                "id": 40,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 39,
                  "name": "UserTodos",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 54,
                  "src": "134:9:1"
                },
                "referencedDeclaration": 54,
                "src": "134:9:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_UserTodos_$54_storage_ptr",
                  "typeString": "struct Todo.UserTodos"
                }
              }
            },
            "visibility": "public"
          },
          {
            "canonicalName": "Todo.TodoItem",
            "id": 47,
            "members": [
              {
                "constant": false,
                "id": 44,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "191:2:1",
                "nodeType": "VariableDeclaration",
                "scope": 47,
                "src": "184:9:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 43,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "184:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 46,
                "mutability": "mutable",
                "name": "todoContent",
                "nameLocation": "206:11:1",
                "nodeType": "VariableDeclaration",
                "scope": 47,
                "src": "199:18:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 45,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "199:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "TodoItem",
            "nameLocation": "169:8:1",
            "nodeType": "StructDefinition",
            "scope": 97,
            "src": "162:60:1",
            "visibility": "public"
          },
          {
            "canonicalName": "Todo.UserTodos",
            "id": 54,
            "members": [
              {
                "constant": false,
                "id": 49,
                "mutability": "mutable",
                "name": "user",
                "nameLocation": "257:4:1",
                "nodeType": "VariableDeclaration",
                "scope": 54,
                "src": "249:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 48,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "249:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 53,
                "mutability": "mutable",
                "name": "todos",
                "nameLocation": "278:5:1",
                "nodeType": "VariableDeclaration",
                "scope": 54,
                "src": "267:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr",
                  "typeString": "struct Todo.TodoItem[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 51,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 50,
                      "name": "TodoItem",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47,
                      "src": "267:8:1"
                    },
                    "referencedDeclaration": 47,
                    "src": "267:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                      "typeString": "struct Todo.TodoItem"
                    }
                  },
                  "id": 52,
                  "nodeType": "ArrayTypeName",
                  "src": "267:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr",
                    "typeString": "struct Todo.TodoItem[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UserTodos",
            "nameLocation": "233:9:1",
            "nodeType": "StructDefinition",
            "scope": 97,
            "src": "226:62:1",
            "visibility": "public"
          },
          {
            "body": {
              "id": 68,
              "nodeType": "Block",
              "src": "371:39:1",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 63,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "384:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                          "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                        }
                      },
                      "id": 65,
                      "indexExpression": {
                        "id": 64,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56,
                        "src": "390:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "384:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                        "typeString": "struct Todo.UserTodos storage ref"
                      }
                    },
                    "id": 66,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "todos",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 53,
                    "src": "384:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                      "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 62,
                  "id": 67,
                  "nodeType": "Return",
                  "src": "377:28:1"
                }
              ]
            },
            "functionSelector": "614f3180",
            "id": 69,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAllTodos",
            "nameLocation": "301:11:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "mutability": "mutable",
                  "name": "_address",
                  "nameLocation": "321:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "313:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "312:18:1"
            },
            "returnParameters": {
              "id": 62,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "352:17:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Todo.TodoItem[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 59,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 58,
                        "name": "TodoItem",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 47,
                        "src": "352:8:1"
                      },
                      "referencedDeclaration": 47,
                      "src": "352:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                        "typeString": "struct Todo.TodoItem"
                      }
                    },
                    "id": 60,
                    "nodeType": "ArrayTypeName",
                    "src": "352:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr",
                      "typeString": "struct Todo.TodoItem[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "351:19:1"
            },
            "scope": 97,
            "src": "292:118:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 95,
              "nodeType": "Block",
              "src": "484:128:1",
              "statements": [
                {
                  "assignments": [
                    78
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 78,
                      "mutability": "mutable",
                      "name": "newTodo",
                      "nameLocation": "506:7:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 95,
                      "src": "490:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                        "typeString": "struct Todo.TodoItem"
                      },
                      "typeName": {
                        "id": 77,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 76,
                          "name": "TodoItem",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47,
                          "src": "490:8:1"
                        },
                        "referencedDeclaration": 47,
                        "src": "490:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                          "typeString": "struct Todo.TodoItem"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 83,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 80,
                        "name": "todoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "525:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 81,
                        "name": "_todoContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 73,
                        "src": "536:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 79,
                      "name": "TodoItem",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "516:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_TodoItem_$47_storage_ptr_$",
                        "typeString": "type(struct Todo.TodoItem storage pointer)"
                      }
                    },
                    "id": 82,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "516:33:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                      "typeString": "struct Todo.TodoItem memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "490:59:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 89,
                        "name": "newTodo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "582:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                          "typeString": "struct Todo.TodoItem memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                          "typeString": "struct Todo.TodoItem memory"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 84,
                            "name": "users",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "555:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                              "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                            }
                          },
                          "id": 86,
                          "indexExpression": {
                            "id": 85,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "561:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "555:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                            "typeString": "struct Todo.UserTodos storage ref"
                          }
                        },
                        "id": 87,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "todos",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 53,
                        "src": "555:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                          "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "555:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$_t_struct$_TodoItem_$47_storage_$returns$__$bound_to$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Todo.TodoItem storage ref[] storage pointer,struct Todo.TodoItem storage ref)"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "555:35:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "555:35:1"
                },
                {
                  "expression": {
                    "id": 93,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "596:11:1",
                    "subExpression": {
                      "id": 92,
                      "name": "todoCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 37,
                      "src": "596:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 94,
                  "nodeType": "ExpressionStatement",
                  "src": "596:11:1"
                }
              ]
            },
            "functionSelector": "3260a5d0",
            "id": 96,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addTodo",
            "nameLocation": "423:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 71,
                  "mutability": "mutable",
                  "name": "_address",
                  "nameLocation": "439:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "431:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 70,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "_todoContent",
                  "nameLocation": "463:12:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 96,
                  "src": "449:26:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "430:46:1"
            },
            "returnParameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "484:0:1"
            },
            "scope": 97,
            "src": "414:198:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 98,
        "src": "66:548:1",
        "usedErrors": []
      }
    ],
    "src": "32:582:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.11+commit.d7f03943.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xcC071bB9747B8037542d2d74CAb45b2677E53BCA",
      "transactionHash": "0x98fc2434d78623ff4ad4789d416179e2fc3d8380b2dd48a9f93dbe51c6d880f5"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2022-01-21T12:55:05.849Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}