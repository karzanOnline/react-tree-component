

export default class Item extends React.Component{

    constructor (props){
        
        super(props);
        
        this.state = {
            itemShow : false|| props.itemShow,
            onDeep : 1 || props.onDeep,
            data : ''||props.data
        }

    }

    fItemShow (item){
        // 通知父组件启动回调
        // fItemShow -> 父组件callback函数 -> fAutoToggle()
        let _this = this;

        _this.props.callback(_this.props.tierDeep,item,_this.state.data[item].child||'');
    }

    fAutoToggle (item,onDeep){

        let _this = this;
    }

    fShowToggle (){

        this.setState({ itemShow : true})
    }

    fCloseToggle (){
        
        this.setState({ itemShow : false})

    }

    componentWillReceiveProps (props){

        this.setState({ data : props.data})
    }



    render (){
        const state = this.state;
        const props = this.props;
        let data = state.data;
       
        return (
            <ul style={this.state.itemShow?{display:"block"}:{display:"none"}}>
                {
                    data&&Object.keys(data)&&Object.keys(data).map((item)=>{
                        return <li onClick={this.fItemShow.bind(this, item)} key = {item}>{data[item].text}</li>
                    })
                }
                {props.children}
            </ul>
        )
    }
}

