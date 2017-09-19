## React-study
react入门学习

## 练习组件
* clock/ （时间）
* toggle/ toast/ 弹窗（可复用）
* form/ 表单基础
* dataTable/ 条件查询

## 易忽略
1. 组件名称必须以大写字母开头 <Test />
2. 多个组件共用状态数据，将共享状态提升至父组件进行管理

## 问题
1. ~~组件向子组件动态传值不明白~~
    * 父级向子级传递数据，props
2. ~~父组件向子组件传值，props怎么与state值统一~~
    * props属性为只读，组件内部无法修改自己的props值
    * state状态，私有，在组件内部就行操作
3. ~~多个input表单~~
    动态更新值
    ````
    handleChange (event) {
        let name = event.target.name
        let value = event.target.value

        this.setState({
          [name]: value
        })
      }
    ````

## 使用
1. git clone https://github.com/numberfan/ReactStudy.git react-study
2. cd react-study
3. npm install
4. npm run dev // start
5. npm run build // build