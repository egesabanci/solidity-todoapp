// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Todo {
  int256 public todoCount = 0;
  mapping(address => UserTodos) public users;

  struct TodoItem {
    int256 id;
    string todoContent;
  }

  struct UserTodos {
    address user;
    TodoItem[] todos;
  }

  function getAllTodos(address _address) public view returns (TodoItem[] memory) {
    return users[_address].todos;
  }

  function getTodo(address _address, uint256 _todoID) view public returns (TodoItem memory) {
    return users[_address].todos[_todoID];
  }

  function addTodo(address _address, string memory _todoContent) public {
    TodoItem memory newTodo = TodoItem(todoCount, _todoContent);
    users[_address].todos.push(newTodo);
  }
}