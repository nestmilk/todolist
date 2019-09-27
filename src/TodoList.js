import React from 'react';
import TodoItem from "./TodoItem";

// function App() {
//   return (
//     <div>
//       hello, i am dell
//     </div>
//   );
// }

class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.state ={
            list: [],
            inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleBtnClick () {
        // onClick={this.handleBtnClick}此处的this指向的居然是button
        // 直接写数据不自动改变
        // this.state.list.push('hello word')
        this.setState({
            // ...展开运算符
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    // handleItemClick (index) {
    //     const list = [...this.state.list]
    //     list.splice(index, 1)
    //     this.setState({
    //         list: list
    //     })
    // }

    handleDelete (index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    getTodoItems () {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        deleteItem={this.handleDelete}
                        key={index}
                        content={item}
                        index={index}
                    />
                )
            })
        )
    }

    render () {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </div>
        )
    }
}

export default TodoList;
