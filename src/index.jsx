
import data from './data.jsx';

import Item from './item.jsx';

class Tree extends React.Component {

    constructor (props){

        super(props);
        let _this = this;
        _this.state = {
            data : '',
            showItem : false,
            onDeep :0
        };
    }

    componentDidMount (){
        // 获取数据用来显示
        this.setState({ data : data });
        
    }

    getTierDeep (){
        // 这里用递归来判断 层级的深度
        // TODO
        return this.tierDeep = 3
    }

    showThat (onDeep, sign, item, data){
        //强制类型转换

        let _this = this;
        sign = sign * 1;

        //这里获取当前点击的下一个菜单并且让其显示
        //_this.refs[`item${sign+1}`].fAutoToggle(item,sign+1);

        _this.refs[`item${onDeep+1}`]&&_this.refs[`item${onDeep+1}`].fShowToggle();
        _this.refs[`item${onDeep+2}`]&&_this.refs[`item${onDeep+2}`].fCloseToggle();
        // _this.setState({onDeep: sign+1})
        debugger;
        var temp = { [`data${onDeep+1}`]:data};
        data&&_this.setState(temp)

    }


    aTierDeep (){

        // 这里获取嵌套层级深度
        // 这里使用尾递归
        let tierDeep = this.tierDeep,
            _this = this;
        
        var fnItemResult = function(item, tierDeep){

            if(tierDeep==1) return item;

            return fnItemResult(<Item data={_this.state[`data${tierDeep}`]||''} callback= {_this.showThat.bind(_this,item)} tierDeep={tierDeep} ref={`item${tierDeep}`}>{item}</Item>, --tierDeep)
        };

        return fnItemResult(null, tierDeep);
        
        // 可能在现实使用的是放在同级的。反而简单了许多
        // 最深层的已经计算出来 直接用map来渲染
         
    }

    render (){
        let _this = this;
        return (
            <div>

                <Item tierDeep={_this.getTierDeep()} callback = {_this.showThat.bind(_this,1)} ref="item1" itemShow={true} data = {this.state.data}>
                    {
                        // 动态获取 根据data层级的深度 展示列表
                        _this.aTierDeep()
                    }
                </Item>
            </div>
        )
    }

}

ReactDOM.render(<Tree/>, document.getElementById('wrap'));

