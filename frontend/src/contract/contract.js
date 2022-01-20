export const todoContractAddress = {
  "address": "0xbbCB9BB0c685c97Db003856C3D167DbD0505782b"
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
          "internalType": "uint256",
          "name": "_todoID",
          "type": "uint256"
        }
      ],
      "name": "getTodo",
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
          "internalType": "struct Todo.TodoItem",
          "name": "",
          "type": "tuple"
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_todoContent\",\"type\":\"string\"}],\"name\":\"addTodo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"getAllTodos\",\"outputs\":[{\"components\":[{\"internalType\":\"int256\",\"name\":\"id\",\"type\":\"int256\"},{\"internalType\":\"string\",\"name\":\"todoContent\",\"type\":\"string\"}],\"internalType\":\"struct Todo.TodoItem[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_address\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_todoID\",\"type\":\"uint256\"}],\"name\":\"getTodo\",\"outputs\":[{\"components\":[{\"internalType\":\"int256\",\"name\":\"id\",\"type\":\"int256\"},{\"internalType\":\"string\",\"name\":\"todoContent\",\"type\":\"string\"}],\"internalType\":\"struct Todo.TodoItem\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"todoCount\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"users\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Todo.sol\":\"Todo\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Todo.sol\":{\"keccak256\":\"0x73be6b2c89e2ea203bef7320fbb6d4e520f443adac8846f8ff3cd6723e32c8c6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0cdf7b71394423b5b97ad12ea9bee953470b4920dee18c22d4b129ae3a267855\",\"dweb:/ipfs/QmUJkPHYbuQbkQxKr4hC8iWELYecnrQSiksqHTzdRGWGpJ\"]}},\"version\":1}",
  "bytecode": "0x60806040526000805534801561001457600080fd5b50610b24806100246000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633260a5d01461005c5780633fb2017814610078578063614f3180146100a8578063a87430ba146100d8578063fe0dee1714610108575b600080fd5b610076600480360381019061007191906106ea565b610126565b005b610092600480360381019061008d919061077c565b6101db565b60405161009f919061089a565b60405180910390f35b6100c260048036038101906100bd91906108bc565b6102f4565b6040516100cf91906109e8565b60405180910390f35b6100f260048036038101906100ed91906108bc565b610431565b6040516100ff9190610a19565b60405180910390f35b61011061046f565b60405161011d9190610a43565b60405180910390f35b600060405180604001604052806000548152602001838152509050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190805190602001906101d3929190610475565b505050505050565b6101e36104fb565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101828154811061023757610236610a5e565b5b90600052602060002090600202016040518060400160405290816000820154815260200160018201805461026a90610abc565b80601f016020809104026020016040519081016040528092919081815260200182805461029690610abc565b80156102e35780601f106102b8576101008083540402835291602001916102e3565b820191906000526020600020905b8154815290600101906020018083116102c657829003601f168201915b505050505081525050905092915050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b8282101561042657838290600052602060002090600202016040518060400160405290816000820154815260200160018201805461039590610abc565b80601f01602080910402602001604051908101604052809291908181526020018280546103c190610abc565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b50505050508152505081526020019060010190610358565b505050509050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081565b60005481565b82805461048190610abc565b90600052602060002090601f0160209004810192826104a357600085556104ea565b82601f106104bc57805160ff19168380011785556104ea565b828001600101855582156104ea579182015b828111156104e95782518255916020019190600101906104ce565b5b5090506104f79190610515565b5090565b604051806040016040528060008152602001606081525090565b5b8082111561052e576000816000905550600101610516565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061057182610546565b9050919050565b61058181610566565b811461058c57600080fd5b50565b60008135905061059e81610578565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105f7826105ae565b810181811067ffffffffffffffff82111715610616576106156105bf565b5b80604052505050565b6000610629610532565b905061063582826105ee565b919050565b600067ffffffffffffffff821115610655576106546105bf565b5b61065e826105ae565b9050602081019050919050565b82818337600083830152505050565b600061068d6106888461063a565b61061f565b9050828152602081018484840111156106a9576106a86105a9565b5b6106b484828561066b565b509392505050565b600082601f8301126106d1576106d06105a4565b5b81356106e184826020860161067a565b91505092915050565b600080604083850312156107015761070061053c565b5b600061070f8582860161058f565b925050602083013567ffffffffffffffff8111156107305761072f610541565b5b61073c858286016106bc565b9150509250929050565b6000819050919050565b61075981610746565b811461076457600080fd5b50565b60008135905061077681610750565b92915050565b600080604083850312156107935761079261053c565b5b60006107a18582860161058f565b92505060206107b285828601610767565b9150509250929050565b6000819050919050565b6107cf816107bc565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561080f5780820151818401526020810190506107f4565b8381111561081e576000848401525b50505050565b600061082f826107d5565b61083981856107e0565b93506108498185602086016107f1565b610852816105ae565b840191505092915050565b600060408301600083015161087560008601826107c6565b506020830151848203602086015261088d8282610824565b9150508091505092915050565b600060208201905081810360008301526108b4818461085d565b905092915050565b6000602082840312156108d2576108d161053c565b5b60006108e08482850161058f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060408301600083015161092d60008601826107c6565b50602083015184820360208601526109458282610824565b9150508091505092915050565b600061095e8383610915565b905092915050565b6000602082019050919050565b600061097e826108e9565b61098881856108f4565b93508360208202850161099a85610905565b8060005b858110156109d657848403895281516109b78582610952565b94506109c283610966565b925060208a0199505060018101905061099e565b50829750879550505050505092915050565b60006020820190508181036000830152610a028184610973565b905092915050565b610a1381610566565b82525050565b6000602082019050610a2e6000830184610a0a565b92915050565b610a3d816107bc565b82525050565b6000602082019050610a586000830184610a34565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ad457607f821691505b60208210811415610ae857610ae7610a8d565b5b5091905056fea26469706673582212201e2eb48bd3d2f5a6558cec8da9ca39079f0558a401ee668d97705d6f13b36c4664736f6c634300080b0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80633260a5d01461005c5780633fb2017814610078578063614f3180146100a8578063a87430ba146100d8578063fe0dee1714610108575b600080fd5b610076600480360381019061007191906106ea565b610126565b005b610092600480360381019061008d919061077c565b6101db565b60405161009f919061089a565b60405180910390f35b6100c260048036038101906100bd91906108bc565b6102f4565b6040516100cf91906109e8565b60405180910390f35b6100f260048036038101906100ed91906108bc565b610431565b6040516100ff9190610a19565b60405180910390f35b61011061046f565b60405161011d9190610a43565b60405180910390f35b600060405180604001604052806000548152602001838152509050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010190805190602001906101d3929190610475565b505050505050565b6101e36104fb565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101828154811061023757610236610a5e565b5b90600052602060002090600202016040518060400160405290816000820154815260200160018201805461026a90610abc565b80601f016020809104026020016040519081016040528092919081815260200182805461029690610abc565b80156102e35780601f106102b8576101008083540402835291602001916102e3565b820191906000526020600020905b8154815290600101906020018083116102c657829003601f168201915b505050505081525050905092915050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b8282101561042657838290600052602060002090600202016040518060400160405290816000820154815260200160018201805461039590610abc565b80601f01602080910402602001604051908101604052809291908181526020018280546103c190610abc565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b50505050508152505081526020019060010190610358565b505050509050919050565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081565b60005481565b82805461048190610abc565b90600052602060002090601f0160209004810192826104a357600085556104ea565b82601f106104bc57805160ff19168380011785556104ea565b828001600101855582156104ea579182015b828111156104e95782518255916020019190600101906104ce565b5b5090506104f79190610515565b5090565b604051806040016040528060008152602001606081525090565b5b8082111561052e576000816000905550600101610516565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061057182610546565b9050919050565b61058181610566565b811461058c57600080fd5b50565b60008135905061059e81610578565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6105f7826105ae565b810181811067ffffffffffffffff82111715610616576106156105bf565b5b80604052505050565b6000610629610532565b905061063582826105ee565b919050565b600067ffffffffffffffff821115610655576106546105bf565b5b61065e826105ae565b9050602081019050919050565b82818337600083830152505050565b600061068d6106888461063a565b61061f565b9050828152602081018484840111156106a9576106a86105a9565b5b6106b484828561066b565b509392505050565b600082601f8301126106d1576106d06105a4565b5b81356106e184826020860161067a565b91505092915050565b600080604083850312156107015761070061053c565b5b600061070f8582860161058f565b925050602083013567ffffffffffffffff8111156107305761072f610541565b5b61073c858286016106bc565b9150509250929050565b6000819050919050565b61075981610746565b811461076457600080fd5b50565b60008135905061077681610750565b92915050565b600080604083850312156107935761079261053c565b5b60006107a18582860161058f565b92505060206107b285828601610767565b9150509250929050565b6000819050919050565b6107cf816107bc565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561080f5780820151818401526020810190506107f4565b8381111561081e576000848401525b50505050565b600061082f826107d5565b61083981856107e0565b93506108498185602086016107f1565b610852816105ae565b840191505092915050565b600060408301600083015161087560008601826107c6565b506020830151848203602086015261088d8282610824565b9150508091505092915050565b600060208201905081810360008301526108b4818461085d565b905092915050565b6000602082840312156108d2576108d161053c565b5b60006108e08482850161058f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060408301600083015161092d60008601826107c6565b50602083015184820360208601526109458282610824565b9150508091505092915050565b600061095e8383610915565b905092915050565b6000602082019050919050565b600061097e826108e9565b61098881856108f4565b93508360208202850161099a85610905565b8060005b858110156109d657848403895281516109b78582610952565b94506109c283610966565b925060208a0199505060018101905061099e565b50829750879550505050505092915050565b60006020820190508181036000830152610a028184610973565b905092915050565b610a1381610566565b82525050565b6000602082019050610a2e6000830184610a0a565b92915050565b610a3d816107bc565b82525050565b6000602082019050610a586000830184610a34565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ad457607f821691505b60208210811415610ae857610ae7610a8d565b5b5091905056fea26469706673582212201e2eb48bd3d2f5a6558cec8da9ca39079f0558a401ee668d97705d6f13b36c4664736f6c634300080b0033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:11660:2",
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
              "src": "3760:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3770:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3781:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3770:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3742:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3752:7:2",
                "type": ""
              }
            ],
            "src": "3715:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3841:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3898:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3907:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3910:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3900:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3900:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3900:12:2"
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
                            "src": "3864:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3889:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3871:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3871:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3861:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3861:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3854:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3854:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3851:63:2"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3834:5:2",
                "type": ""
              }
            ],
            "src": "3798:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3978:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3988:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4010:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3997:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3997:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3988:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4053:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "4026:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4026:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4026:33:2"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3956:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3964:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3972:5:2",
                "type": ""
              }
            ],
            "src": "3926:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4154:391:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4200:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4202:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4202:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4202:79:2"
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
                            "src": "4175:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4184:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4171:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4171:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4196:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4167:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4167:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4164:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4293:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4308:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4322:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4312:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4337:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4372:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4383:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4368:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4368:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4392:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4347:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4347:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4337:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4420:118:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4435:16:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4449:2:2",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4439:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4465:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4500:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4511:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4496:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4496:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4520:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4475:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4475:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4465:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4116:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4127:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4139:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4147:6:2",
                "type": ""
              }
            ],
            "src": "4071:474:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4595:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4605:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4616:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4605:7:2"
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
                "src": "4577:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4587:7:2",
                "type": ""
              }
            ],
            "src": "4551:76:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4686:52:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4703:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4725:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "4708:16:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4708:23:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4696:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4696:36:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4696:36:2"
                }
              ]
            },
            "name": "abi_encode_t_int256_to_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4674:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4681:3:2",
                "type": ""
              }
            ],
            "src": "4633:105:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4803:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4814:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4830:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4824:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4824:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "4814:6:2"
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
                "src": "4786:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4796:6:2",
                "type": ""
              }
            ],
            "src": "4744:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4935:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4952:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4957:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4945:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4945:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4945:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4973:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4992:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4997:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4988:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4988:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "4973:11:2"
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
                "src": "4907:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4912:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "4923:11:2",
                "type": ""
              }
            ],
            "src": "4849:159:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5063:258:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5073:10:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5082:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "5077:1:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5142:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "5167:3:2"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "5172:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5163:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5163:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
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
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "5176:5:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5176:18:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5156:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5156:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5156:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "5103:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5106:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "5100:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5100:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "5114:19:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5116:15:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "5125:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5128:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5121:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5121:10:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "5116:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "5096:3:2",
                    "statements": []
                  },
                  "src": "5092:113:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5239:76:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "5289:3:2"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "5294:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5285:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5285:16:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5303:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5278:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5278:27:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5278:27:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "5220:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5223:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5217:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5217:13:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5214:101:2"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "5045:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "5050:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5055:6:2",
                "type": ""
              }
            ],
            "src": "5014:307:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5409:262:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5419:53:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5466:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5433:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5433:39:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5423:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5481:68:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5537:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5542:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5488:48:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5488:61:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5481:3:2"
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
                            "src": "5584:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5591:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5580:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5580:16:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5598:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5603:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "5558:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5558:52:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5558:52:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5619:46:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5630:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5657:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "5635:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5635:29:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5626:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5626:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5619:3:2"
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
                "src": "5390:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5397:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5405:3:2",
                "type": ""
              }
            ],
            "src": "5327:344:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5851:485:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5861:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5877:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5882:4:2",
                        "type": "",
                        "value": "0x40"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5873:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5873:14:2"
                  },
                  "variables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "5865:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5897:160:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5930:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "5960:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5967:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5956:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5956:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "5950:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5950:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "5934:12:2",
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
                            "src": "6018:12:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "6036:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6041:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6032:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6032:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_int256_to_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "5986:31:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5986:61:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5986:61:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6067:242:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6109:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "6139:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6146:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6135:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6135:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "6129:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6129:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "6113:12:2",
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
                                "src": "6177:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6182:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6173:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6173:14:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nodeType": "YulIdentifier",
                                "src": "6193:4:2"
                              },
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "6199:3:2"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "6189:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6189:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6166:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6166:38:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6166:38:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6217:81:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulIdentifier",
                            "src": "6279:12:2"
                          },
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6293:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "6225:53:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6225:73:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6217:4:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6319:11:2",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "6326:4:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6319:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5830:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5837:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5846:3:2",
                "type": ""
              }
            ],
            "src": "5729:607:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6488:223:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6498:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6510:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6521:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6506:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6506:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6498:4:2"
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
                            "src": "6545:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6556:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6541:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6541:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6564:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6570:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6560:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6560:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6534:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6534:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6534:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6590:114:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6690:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6699:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6598:91:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6598:106:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6590:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_struct$_TodoItem_$47_memory_ptr__to_t_struct$_TodoItem_$47_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6460:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6472:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6483:4:2",
                "type": ""
              }
            ],
            "src": "6342:369:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6783:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6829:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6831:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6831:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6831:79:2"
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
                            "src": "6804:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6813:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6800:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6800:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6825:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6796:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6796:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "6793:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6922:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6937:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6951:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6941:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6966:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7001:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "7012:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6997:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6997:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7021:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "6976:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6976:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6966:6:2"
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
                "src": "6753:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6764:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6776:6:2",
                "type": ""
              }
            ],
            "src": "6717:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7150:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7161:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7177:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "7171:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7171:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "7161:6:2"
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
                "src": "7133:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7143:6:2",
                "type": ""
              }
            ],
            "src": "7052:138:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7331:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7348:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7353:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7341:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7341:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7341:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7369:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7388:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7393:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7384:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7384:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "7369:11:2"
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
                "src": "7303:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7308:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "7319:11:2",
                "type": ""
              }
            ],
            "src": "7196:208:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7506:60:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7516:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "7524:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "7516:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7537:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "7549:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7554:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7545:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7545:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "7537:4:2"
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
                "src": "7493:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "7501:4:2",
                "type": ""
              }
            ],
            "src": "7410:156:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7736:485:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7746:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7762:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7767:4:2",
                        "type": "",
                        "value": "0x40"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7758:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7758:14:2"
                  },
                  "variables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "7750:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "7782:160:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "7815:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "7845:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7852:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7841:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7841:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "7835:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7835:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "7819:12:2",
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
                            "src": "7903:12:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "7921:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7926:4:2",
                                "type": "",
                                "value": "0x00"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7917:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7917:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_int256_to_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "7871:31:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7871:61:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "7871:61:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "7952:242:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "7994:43:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "8024:5:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8031:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "8020:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8020:16:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "8014:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8014:23:2"
                      },
                      "variables": [
                        {
                          "name": "memberValue0",
                          "nodeType": "YulTypedName",
                          "src": "7998:12:2",
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
                                "src": "8062:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8067:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "8058:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8058:14:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "tail",
                                "nodeType": "YulIdentifier",
                                "src": "8078:4:2"
                              },
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "8084:3:2"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "8074:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8074:14:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "8051:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8051:38:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "8051:38:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "8102:81:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "memberValue0",
                            "nodeType": "YulIdentifier",
                            "src": "8164:12:2"
                          },
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8178:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "8110:53:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8110:73:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "8102:4:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8204:11:2",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "8211:4:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "8204:3:2"
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
                "src": "7715:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7722:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7731:3:2",
                "type": ""
              }
            ],
            "src": "7624:597:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8355:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8365:108:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8461:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8469:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8379:81:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8379:94:2"
                  },
                  "variableNames": [
                    {
                      "name": "updatedPos",
                      "nodeType": "YulIdentifier",
                      "src": "8365:10:2"
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
                "src": "8328:6:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8336:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updatedPos",
                "nodeType": "YulTypedName",
                "src": "8344:10:2",
                "type": ""
              }
            ],
            "src": "8227:252:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8584:38:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8594:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "8606:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8611:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8602:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8602:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "next",
                      "nodeType": "YulIdentifier",
                      "src": "8594:4:2"
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
                "src": "8571:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "next",
                "nodeType": "YulTypedName",
                "src": "8579:4:2",
                "type": ""
              }
            ],
            "src": "8485:137:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8856:931:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8866:92:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8952:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8880:71:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8880:78:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8870:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8967:117:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9072:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9077:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8974:97:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8974:110:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "8967:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9093:20:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "9110:3:2"
                  },
                  "variables": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "9097:9:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9122:39:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9138:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "9147:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9155:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "9143:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9143:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9134:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9134:27:2"
                  },
                  "variables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "9126:4:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9170:95:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9259:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "9185:73:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9185:80:2"
                  },
                  "variables": [
                    {
                      "name": "baseRef",
                      "nodeType": "YulTypedName",
                      "src": "9174:7:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9274:21:2",
                  "value": {
                    "name": "baseRef",
                    "nodeType": "YulIdentifier",
                    "src": "9288:7:2"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "9278:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9364:378:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9385:3:2"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "9394:4:2"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9400:9:2"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "9390:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9390:20:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9378:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9378:33:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9378:33:2"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9424:34:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "9451:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "9445:5:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9445:13:2"
                        },
                        "variables": [
                          {
                            "name": "elementValue0",
                            "nodeType": "YulTypedName",
                            "src": "9428:13:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9471:120:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "elementValue0",
                              "nodeType": "YulIdentifier",
                              "src": "9571:13:2"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "9586:4:2"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "9479:91:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9479:112:2"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9471:4:2"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9604:94:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "9691:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "9614:76:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9614:84:2"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "9604:6:2"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9711:21:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9722:3:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9727:4:2",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9718:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9718:14:2"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9711:3:2"
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
                        "src": "9326:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9329:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "9323:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9323:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "9337:18:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9339:14:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "9348:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9351:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9344:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9344:9:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "9339:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "9308:14:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9310:10:2",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9319:1:2",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "9314:1:2",
                            "type": ""
                          }
                        ]
                      }
                    ]
                  },
                  "src": "9304:438:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9751:11:2",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "9758:4:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9751:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9771:10:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "9778:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9771:3:2"
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
                "src": "8835:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8842:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8851:3:2",
                "type": ""
              }
            ],
            "src": "8684:1103:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9989:273:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9999:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10011:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10022:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10007:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10007:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9999:4:2"
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
                            "src": "10046:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10057:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10042:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10042:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10065:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10071:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10061:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10061:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10035:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10035:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10035:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10091:164:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10241:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10250:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10099:141:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10099:156:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10091:4:2"
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
                "src": "9961:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9973:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9984:4:2",
                "type": ""
              }
            ],
            "src": "9793:469:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10333:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10350:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "10373:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "10355:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10355:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10343:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10343:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10343:37:2"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10321:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10328:3:2",
                "type": ""
              }
            ],
            "src": "10268:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10490:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10500:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10512:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10523:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10508:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10508:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10500:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10580:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10593:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10604:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10589:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10589:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10536:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10536:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10536:71:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10462:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10474:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10485:4:2",
                "type": ""
              }
            ],
            "src": "10392:222:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10683:52:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10700:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "10722:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "10705:16:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10705:23:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10693:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10693:36:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10693:36:2"
                }
              ]
            },
            "name": "abi_encode_t_int256_to_t_int256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10671:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10678:3:2",
                "type": ""
              }
            ],
            "src": "10620:115:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10837:122:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10847:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10859:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10870:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10855:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10855:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10847:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10925:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10938:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10949:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10934:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10934:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_int256_to_t_int256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10883:41:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10883:69:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10883:69:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10809:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10821:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10832:4:2",
                "type": ""
              }
            ],
            "src": "10741:218:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10993:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11010:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11013:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11003:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11003:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11003:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11107:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11110:4:2",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11100:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11100:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11100:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11131:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11134:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "11124:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11124:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11124:15:2"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "10965:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11179:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11196:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11199:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11189:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11189:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11189:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11293:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11296:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11286:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11286:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11286:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11317:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11320:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "11310:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11310:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11310:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "11151:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11388:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11398:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "11412:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11418:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "11408:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11408:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "11398:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11429:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "11459:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11465:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "11455:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11455:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "11433:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11506:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11520:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "11534:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11542:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "11530:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11530:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "11520:6:2"
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
                        "src": "11486:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "11479:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11479:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "11476:81:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11609:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "11623:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11623:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11623:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "11573:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "11596:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11604:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "11593:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11593:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "11570:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11570:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "11567:84:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "11372:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "11381:6:2",
                "type": ""
              }
            ],
            "src": "11337:320:2"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_int256_to_t_int256(value, pos) {\n        mstore(pos, cleanup_t_int256(value))\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    // struct Todo.TodoItem -> struct Todo.TodoItem\n    function abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr_fromStack(value, pos)  -> end  {\n        let tail := add(pos, 0x40)\n\n        {\n            // id\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_int256_to_t_int256(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // todoContent\n\n            let memberValue0 := mload(add(value, 0x20))\n\n            mstore(add(pos, 0x20), sub(tail, pos))\n            tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(memberValue0, tail)\n\n        }\n\n        end := tail\n    }\n\n    function abi_encode_tuple_t_struct$_TodoItem_$47_memory_ptr__to_t_struct$_TodoItem_$47_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    // struct Todo.TodoItem -> struct Todo.TodoItem\n    function abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(value, pos)  -> end  {\n        let tail := add(pos, 0x40)\n\n        {\n            // id\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_int256_to_t_int256(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // todoContent\n\n            let memberValue0 := mload(add(value, 0x20))\n\n            mstore(add(pos, 0x20), sub(tail, pos))\n            tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr(memberValue0, tail)\n\n        }\n\n        end := tail\n    }\n\n    function abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(value0, pos) -> updatedPos {\n        updatedPos := abi_encode_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(value0, pos)\n    }\n\n    function array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    // struct Todo.TodoItem[] -> struct Todo.TodoItem[]\n    function abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let headStart := pos\n        let tail := add(pos, mul(length, 0x20))\n        let baseRef := array_dataslot_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, sub(tail, headStart))\n            let elementValue0 := mload(srcPtr)\n            tail := abi_encodeUpdatedPos_t_struct$_TodoItem_$47_memory_ptr_to_t_struct$_TodoItem_$47_memory_ptr(elementValue0, tail)\n            srcPtr := array_nextElement_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr(srcPtr)\n            pos := add(pos, 0x20)\n        }\n        pos := tail\n        end := pos\n    }\n\n    function abi_encode_tuple_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_TodoItem_$47_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_int256_to_t_int256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_int256(value))\n    }\n\n    function abi_encode_tuple_t_int256__to_t_int256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_int256_to_t_int256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "66:673:1:-:0;;;110:1;84:27;;66:673;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "66:673:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;556:181;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;414:138;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;292:118;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;115:42;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;84:27;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;556:181;632:23;658:33;;;;;;;;667:9;;658:33;;;;678:12;658:33;;;632:59;;697:5;:15;703:8;697:15;;;;;;;;;;;;;;;:21;;724:7;697:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;626:111;556:181;;:::o;414:138::-;487:15;;:::i;:::-;517:5;:15;523:8;517:15;;;;;;;;;;;;;;;:21;;539:7;517:30;;;;;;;;:::i;:::-;;;;;;;;;;;;510:37;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;414:138;;;;:::o;292:118::-;352:17;384:5;:15;390:8;384:15;;;;;;;;;;;;;;;:21;;377:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;292:118;;;:::o;115:42::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;84:27::-;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:139::-;742:5;780:6;767:20;758:29;;796:33;823:5;796:33;:::i;:::-;696:139;;;;:::o;841:117::-;950:1;947;940:12;964:117;1073:1;1070;1063:12;1087:102;1128:6;1179:2;1175:7;1170:2;1163:5;1159:14;1155:28;1145:38;;1087:102;;;:::o;1195:180::-;1243:77;1240:1;1233:88;1340:4;1337:1;1330:15;1364:4;1361:1;1354:15;1381:281;1464:27;1486:4;1464:27;:::i;:::-;1456:6;1452:40;1594:6;1582:10;1579:22;1558:18;1546:10;1543:34;1540:62;1537:88;;;1605:18;;:::i;:::-;1537:88;1645:10;1641:2;1634:22;1424:238;1381:281;;:::o;1668:129::-;1702:6;1729:20;;:::i;:::-;1719:30;;1758:33;1786:4;1778:6;1758:33;:::i;:::-;1668:129;;;:::o;1803:308::-;1865:4;1955:18;1947:6;1944:30;1941:56;;;1977:18;;:::i;:::-;1941:56;2015:29;2037:6;2015:29;:::i;:::-;2007:37;;2099:4;2093;2089:15;2081:23;;1803:308;;;:::o;2117:154::-;2201:6;2196:3;2191;2178:30;2263:1;2254:6;2249:3;2245:16;2238:27;2117:154;;;:::o;2277:412::-;2355:5;2380:66;2396:49;2438:6;2396:49;:::i;:::-;2380:66;:::i;:::-;2371:75;;2469:6;2462:5;2455:21;2507:4;2500:5;2496:16;2545:3;2536:6;2531:3;2527:16;2524:25;2521:112;;;2552:79;;:::i;:::-;2521:112;2642:41;2676:6;2671:3;2666;2642:41;:::i;:::-;2361:328;2277:412;;;;;:::o;2709:340::-;2765:5;2814:3;2807:4;2799:6;2795:17;2791:27;2781:122;;2822:79;;:::i;:::-;2781:122;2939:6;2926:20;2964:79;3039:3;3031:6;3024:4;3016:6;3012:17;2964:79;:::i;:::-;2955:88;;2771:278;2709:340;;;;:::o;3055:654::-;3133:6;3141;3190:2;3178:9;3169:7;3165:23;3161:32;3158:119;;;3196:79;;:::i;:::-;3158:119;3316:1;3341:53;3386:7;3377:6;3366:9;3362:22;3341:53;:::i;:::-;3331:63;;3287:117;3471:2;3460:9;3456:18;3443:32;3502:18;3494:6;3491:30;3488:117;;;3524:79;;:::i;:::-;3488:117;3629:63;3684:7;3675:6;3664:9;3660:22;3629:63;:::i;:::-;3619:73;;3414:288;3055:654;;;;;:::o;3715:77::-;3752:7;3781:5;3770:16;;3715:77;;;:::o;3798:122::-;3871:24;3889:5;3871:24;:::i;:::-;3864:5;3861:35;3851:63;;3910:1;3907;3900:12;3851:63;3798:122;:::o;3926:139::-;3972:5;4010:6;3997:20;3988:29;;4026:33;4053:5;4026:33;:::i;:::-;3926:139;;;;:::o;4071:474::-;4139:6;4147;4196:2;4184:9;4175:7;4171:23;4167:32;4164:119;;;4202:79;;:::i;:::-;4164:119;4322:1;4347:53;4392:7;4383:6;4372:9;4368:22;4347:53;:::i;:::-;4337:63;;4293:117;4449:2;4475:53;4520:7;4511:6;4500:9;4496:22;4475:53;:::i;:::-;4465:63;;4420:118;4071:474;;;;;:::o;4551:76::-;4587:7;4616:5;4605:16;;4551:76;;;:::o;4633:105::-;4708:23;4725:5;4708:23;:::i;:::-;4703:3;4696:36;4633:105;;:::o;4744:99::-;4796:6;4830:5;4824:12;4814:22;;4744:99;;;:::o;4849:159::-;4923:11;4957:6;4952:3;4945:19;4997:4;4992:3;4988:14;4973:29;;4849:159;;;;:::o;5014:307::-;5082:1;5092:113;5106:6;5103:1;5100:13;5092:113;;;5191:1;5186:3;5182:11;5176:18;5172:1;5167:3;5163:11;5156:39;5128:2;5125:1;5121:10;5116:15;;5092:113;;;5223:6;5220:1;5217:13;5214:101;;;5303:1;5294:6;5289:3;5285:16;5278:27;5214:101;5063:258;5014:307;;;:::o;5327:344::-;5405:3;5433:39;5466:5;5433:39;:::i;:::-;5488:61;5542:6;5537:3;5488:61;:::i;:::-;5481:68;;5558:52;5603:6;5598:3;5591:4;5584:5;5580:16;5558:52;:::i;:::-;5635:29;5657:6;5635:29;:::i;:::-;5630:3;5626:39;5619:46;;5409:262;5327:344;;;;:::o;5729:607::-;5846:3;5882:4;5877:3;5873:14;5967:4;5960:5;5956:16;5950:23;5986:61;6041:4;6036:3;6032:14;6018:12;5986:61;:::i;:::-;5897:160;6146:4;6139:5;6135:16;6129:23;6199:3;6193:4;6189:14;6182:4;6177:3;6173:14;6166:38;6225:73;6293:4;6279:12;6225:73;:::i;:::-;6217:81;;6067:242;6326:4;6319:11;;5851:485;5729:607;;;;:::o;6342:369::-;6483:4;6521:2;6510:9;6506:18;6498:26;;6570:9;6564:4;6560:20;6556:1;6545:9;6541:17;6534:47;6598:106;6699:4;6690:6;6598:106;:::i;:::-;6590:114;;6342:369;;;;:::o;6717:329::-;6776:6;6825:2;6813:9;6804:7;6800:23;6796:32;6793:119;;;6831:79;;:::i;:::-;6793:119;6951:1;6976:53;7021:7;7012:6;7001:9;6997:22;6976:53;:::i;:::-;6966:63;;6922:117;6717:329;;;;:::o;7052:138::-;7143:6;7177:5;7171:12;7161:22;;7052:138;;;:::o;7196:208::-;7319:11;7353:6;7348:3;7341:19;7393:4;7388:3;7384:14;7369:29;;7196:208;;;;:::o;7410:156::-;7501:4;7524:3;7516:11;;7554:4;7549:3;7545:14;7537:22;;7410:156;;;:::o;7624:597::-;7731:3;7767:4;7762:3;7758:14;7852:4;7845:5;7841:16;7835:23;7871:61;7926:4;7921:3;7917:14;7903:12;7871:61;:::i;:::-;7782:160;8031:4;8024:5;8020:16;8014:23;8084:3;8078:4;8074:14;8067:4;8062:3;8058:14;8051:38;8110:73;8178:4;8164:12;8110:73;:::i;:::-;8102:81;;7952:242;8211:4;8204:11;;7736:485;7624:597;;;;:::o;8227:252::-;8344:10;8379:94;8469:3;8461:6;8379:94;:::i;:::-;8365:108;;8227:252;;;;:::o;8485:137::-;8579:4;8611;8606:3;8602:14;8594:22;;8485:137;;;:::o;8684:1103::-;8851:3;8880:78;8952:5;8880:78;:::i;:::-;8974:110;9077:6;9072:3;8974:110;:::i;:::-;8967:117;;9110:3;9155:4;9147:6;9143:17;9138:3;9134:27;9185:80;9259:5;9185:80;:::i;:::-;9288:7;9319:1;9304:438;9329:6;9326:1;9323:13;9304:438;;;9400:9;9394:4;9390:20;9385:3;9378:33;9451:6;9445:13;9479:112;9586:4;9571:13;9479:112;:::i;:::-;9471:120;;9614:84;9691:6;9614:84;:::i;:::-;9604:94;;9727:4;9722:3;9718:14;9711:21;;9364:378;9351:1;9348;9344:9;9339:14;;9304:438;;;9308:14;9758:4;9751:11;;9778:3;9771:10;;8856:931;;;;;8684:1103;;;;:::o;9793:469::-;9984:4;10022:2;10011:9;10007:18;9999:26;;10071:9;10065:4;10061:20;10057:1;10046:9;10042:17;10035:47;10099:156;10250:4;10241:6;10099:156;:::i;:::-;10091:164;;9793:469;;;;:::o;10268:118::-;10355:24;10373:5;10355:24;:::i;:::-;10350:3;10343:37;10268:118;;:::o;10392:222::-;10485:4;10523:2;10512:9;10508:18;10500:26;;10536:71;10604:1;10593:9;10589:17;10580:6;10536:71;:::i;:::-;10392:222;;;;:::o;10620:115::-;10705:23;10722:5;10705:23;:::i;:::-;10700:3;10693:36;10620:115;;:::o;10741:218::-;10832:4;10870:2;10859:9;10855:18;10847:26;;10883:69;10949:1;10938:9;10934:17;10925:6;10883:69;:::i;:::-;10741:218;;;;:::o;10965:180::-;11013:77;11010:1;11003:88;11110:4;11107:1;11100:15;11134:4;11131:1;11124:15;11151:180;11199:77;11196:1;11189:88;11296:4;11293:1;11286:15;11320:4;11317:1;11310:15;11337:320;11381:6;11418:1;11412:4;11408:12;11398:22;;11465:1;11459:4;11455:12;11486:18;11476:81;;11542:4;11534:6;11530:17;11520:27;;11476:81;11604:2;11596:6;11593:14;11573:18;11570:38;11567:84;;;11623:18;;:::i;:::-;11567:84;11388:269;11337:320;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract Todo {\n  int256 public todoCount = 0;\n  mapping(address => UserTodos) public users;\n\n  struct TodoItem {\n    int256 id;\n    string todoContent;\n  }\n\n  struct UserTodos {\n    address user;\n    TodoItem[] todos;\n  }\n\n  function getAllTodos(address _address) public view returns (TodoItem[] memory) {\n    return users[_address].todos;\n  }\n\n  function getTodo(address _address, uint256 _todoID) view public returns (TodoItem memory) {\n    return users[_address].todos[_todoID];\n  }\n\n  function addTodo(address _address, string memory _todoContent) public {\n    TodoItem memory newTodo = TodoItem(todoCount, _todoContent);\n    users[_address].todos.push(newTodo);\n  }\n}",
  "sourcePath": "/home/egesabanci/Desktop/projects/blockchain/blockchain-deploy-tutorial/blockchain/contracts/Todo.sol",
  "ast": {
    "absolutePath": "project:/contracts/Todo.sol",
    "exportedSymbols": {
      "Todo": [
        112
      ]
    },
    "id": 113,
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
        "id": 112,
        "linearizedBaseContracts": [
          112
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
            "scope": 112,
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
            "scope": 112,
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
            "scope": 112,
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
            "scope": 112,
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
            "scope": 112,
            "src": "292:118:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "504:48:1",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 79,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "517:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                            "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                          }
                        },
                        "id": 81,
                        "indexExpression": {
                          "id": 80,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "523:8:1",
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
                        "src": "517:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                          "typeString": "struct Todo.UserTodos storage ref"
                        }
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "todos",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 53,
                      "src": "517:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                        "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                      }
                    },
                    "id": 84,
                    "indexExpression": {
                      "id": 83,
                      "name": "_todoID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "539:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "517:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_storage",
                      "typeString": "struct Todo.TodoItem storage ref"
                    }
                  },
                  "functionReturnParameters": 78,
                  "id": 85,
                  "nodeType": "Return",
                  "src": "510:37:1"
                }
              ]
            },
            "functionSelector": "3fb20178",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTodo",
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
                  "scope": 87,
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
                  "name": "_todoID",
                  "nameLocation": "457:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "449:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "430:35:1"
            },
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "487:15:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                    "typeString": "struct Todo.TodoItem"
                  },
                  "typeName": {
                    "id": 76,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 75,
                      "name": "TodoItem",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47,
                      "src": "487:8:1"
                    },
                    "referencedDeclaration": 47,
                    "src": "487:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                      "typeString": "struct Todo.TodoItem"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "486:17:1"
            },
            "scope": 112,
            "src": "414:138:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 110,
              "nodeType": "Block",
              "src": "626:111:1",
              "statements": [
                {
                  "assignments": [
                    96
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 96,
                      "mutability": "mutable",
                      "name": "newTodo",
                      "nameLocation": "648:7:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 110,
                      "src": "632:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                        "typeString": "struct Todo.TodoItem"
                      },
                      "typeName": {
                        "id": 95,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 94,
                          "name": "TodoItem",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47,
                          "src": "632:8:1"
                        },
                        "referencedDeclaration": 47,
                        "src": "632:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                          "typeString": "struct Todo.TodoItem"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 101,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 98,
                        "name": "todoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "667:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 99,
                        "name": "_todoContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91,
                        "src": "678:12:1",
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
                      "id": 97,
                      "name": "TodoItem",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "658:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_TodoItem_$47_storage_ptr_$",
                        "typeString": "type(struct Todo.TodoItem storage pointer)"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "658:33:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                      "typeString": "struct Todo.TodoItem memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "632:59:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 107,
                        "name": "newTodo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 96,
                        "src": "724:7:1",
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
                            "id": 102,
                            "name": "users",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "697:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                              "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                            }
                          },
                          "id": 104,
                          "indexExpression": {
                            "id": 103,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89,
                            "src": "703:8:1",
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
                          "src": "697:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                            "typeString": "struct Todo.UserTodos storage ref"
                          }
                        },
                        "id": 105,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "todos",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 53,
                        "src": "697:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                          "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                        }
                      },
                      "id": 106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "697:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$_t_struct$_TodoItem_$47_storage_$returns$__$bound_to$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Todo.TodoItem storage ref[] storage pointer,struct Todo.TodoItem storage ref)"
                      }
                    },
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "697:35:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "697:35:1"
                }
              ]
            },
            "functionSelector": "3260a5d0",
            "id": 111,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addTodo",
            "nameLocation": "565:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "mutability": "mutable",
                  "name": "_address",
                  "nameLocation": "581:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 111,
                  "src": "573:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "573:7:1",
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
                  "id": 91,
                  "mutability": "mutable",
                  "name": "_todoContent",
                  "nameLocation": "605:12:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 111,
                  "src": "591:26:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "572:46:1"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "626:0:1"
            },
            "scope": 112,
            "src": "556:181:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 113,
        "src": "66:673:1",
        "usedErrors": []
      }
    ],
    "src": "32:707:1"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/Todo.sol",
    "exportedSymbols": {
      "Todo": [
        112
      ]
    },
    "id": 113,
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
        "id": 112,
        "linearizedBaseContracts": [
          112
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
            "scope": 112,
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
            "scope": 112,
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
            "scope": 112,
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
            "scope": 112,
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
            "scope": 112,
            "src": "292:118:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 86,
              "nodeType": "Block",
              "src": "504:48:1",
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 79,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "517:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                            "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                          }
                        },
                        "id": 81,
                        "indexExpression": {
                          "id": 80,
                          "name": "_address",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "523:8:1",
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
                        "src": "517:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                          "typeString": "struct Todo.UserTodos storage ref"
                        }
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "todos",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 53,
                      "src": "517:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                        "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                      }
                    },
                    "id": 84,
                    "indexExpression": {
                      "id": 83,
                      "name": "_todoID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 73,
                      "src": "539:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "517:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_storage",
                      "typeString": "struct Todo.TodoItem storage ref"
                    }
                  },
                  "functionReturnParameters": 78,
                  "id": 85,
                  "nodeType": "Return",
                  "src": "510:37:1"
                }
              ]
            },
            "functionSelector": "3fb20178",
            "id": 87,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTodo",
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
                  "scope": 87,
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
                  "name": "_todoID",
                  "nameLocation": "457:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "449:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 72,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "430:35:1"
            },
            "returnParameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 87,
                  "src": "487:15:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                    "typeString": "struct Todo.TodoItem"
                  },
                  "typeName": {
                    "id": 76,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 75,
                      "name": "TodoItem",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 47,
                      "src": "487:8:1"
                    },
                    "referencedDeclaration": 47,
                    "src": "487:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                      "typeString": "struct Todo.TodoItem"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "486:17:1"
            },
            "scope": 112,
            "src": "414:138:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 110,
              "nodeType": "Block",
              "src": "626:111:1",
              "statements": [
                {
                  "assignments": [
                    96
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 96,
                      "mutability": "mutable",
                      "name": "newTodo",
                      "nameLocation": "648:7:1",
                      "nodeType": "VariableDeclaration",
                      "scope": 110,
                      "src": "632:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                        "typeString": "struct Todo.TodoItem"
                      },
                      "typeName": {
                        "id": 95,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 94,
                          "name": "TodoItem",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 47,
                          "src": "632:8:1"
                        },
                        "referencedDeclaration": 47,
                        "src": "632:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TodoItem_$47_storage_ptr",
                          "typeString": "struct Todo.TodoItem"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 101,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 98,
                        "name": "todoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "667:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 99,
                        "name": "_todoContent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91,
                        "src": "678:12:1",
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
                      "id": 97,
                      "name": "TodoItem",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "658:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_TodoItem_$47_storage_ptr_$",
                        "typeString": "type(struct Todo.TodoItem storage pointer)"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "658:33:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TodoItem_$47_memory_ptr",
                      "typeString": "struct Todo.TodoItem memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "632:59:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 107,
                        "name": "newTodo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 96,
                        "src": "724:7:1",
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
                            "id": 102,
                            "name": "users",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 42,
                            "src": "697:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_UserTodos_$54_storage_$",
                              "typeString": "mapping(address => struct Todo.UserTodos storage ref)"
                            }
                          },
                          "id": 104,
                          "indexExpression": {
                            "id": 103,
                            "name": "_address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89,
                            "src": "703:8:1",
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
                          "src": "697:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserTodos_$54_storage",
                            "typeString": "struct Todo.UserTodos storage ref"
                          }
                        },
                        "id": 105,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "todos",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 53,
                        "src": "697:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage",
                          "typeString": "struct Todo.TodoItem storage ref[] storage ref"
                        }
                      },
                      "id": 106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "697:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$_t_struct$_TodoItem_$47_storage_$returns$__$bound_to$_t_array$_t_struct$_TodoItem_$47_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Todo.TodoItem storage ref[] storage pointer,struct Todo.TodoItem storage ref)"
                      }
                    },
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "697:35:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "697:35:1"
                }
              ]
            },
            "functionSelector": "3260a5d0",
            "id": 111,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addTodo",
            "nameLocation": "565:7:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 89,
                  "mutability": "mutable",
                  "name": "_address",
                  "nameLocation": "581:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 111,
                  "src": "573:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 88,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "573:7:1",
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
                  "id": 91,
                  "mutability": "mutable",
                  "name": "_todoContent",
                  "nameLocation": "605:12:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 111,
                  "src": "591:26:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 90,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "572:46:1"
            },
            "returnParameters": {
              "id": 93,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "626:0:1"
            },
            "scope": 112,
            "src": "556:181:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 113,
        "src": "66:673:1",
        "usedErrors": []
      }
    ],
    "src": "32:707:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.11+commit.d7f03943.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xbbCB9BB0c685c97Db003856C3D167DbD0505782b",
      "transactionHash": "0xc07a03fbdd58d9788b5eba38c3701bac8624ba13aa0c5a56cd068b0e7befea7d"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0xBa0a58C48bd0F30525B54bA0C9675D71983b4B12",
      "transactionHash": "0xb25e0a93e02309b6b214513b269dca355ae2d697965ecbf2bb2157638cc5f343"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2022-01-19T11:00:16.436Z",
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