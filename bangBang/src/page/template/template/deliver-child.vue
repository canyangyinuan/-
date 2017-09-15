<template>
<div id="box">
    <div id="header">
        <img @click="back()" src="http://image.jiantuku.com/17-9-15/9025252.jpg?attname=file_1505441543835_18472.png&e=1505442010&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:8jFT93KtGVIUr5R99ZB-0F7WJpg=" alt="">
        <span>完善发货地址</span>
        <span></span>
    </div>
    <div id="section">
        <div id="search">
            <div id="text">
                <img src="../../../assets/查询白.png" alt="">
                <input type="text" placeholder="请输入发货地址">
            </div>
            <span>确定</span>
        </div>
        <div id="result">
            <div v-for="res in address" @click="setValue($event)">
                <p>{{ res[0] }}</p>
                <p>{{ res[1] }}</p>
            </div>
        </div>
    </div>
</div>

    
</template>

<script>
	export default{
        data(){
            return {
                address:[
                    ["三里屯（公交站）","朝阳区"],
                    ["三里屯太古里","三里屯19号院"],
                    ["三里屯SOHO","工人体育场8号"],
                    ["三里屯水吧一条街","工人体育场8号"]
                ]
            }
            
        },
		methods:{
            //历史记录，返回上一级
			back() {
				history.back()
            },
            //获取到当前点击结果的内容
            setValue(e){
                var a = e.target.innerText
                console.log(a)
            }
		}
	}
</script>

<style lang="less">
@import "../../../../static/less/var.less";
#box{
    widrh:100%;
    height: 100%;
    background:#fff;
    #header{
        width:100%;
        padding:0 @base*1.5rem;
        height:@base*5rem;
        display: flex;
        flex-flow:row nowrap;
        justify-content: space-between;
        align-items: center;
        background:#fff;
        position: fixed;
        top:0;
        left:0;
        border-bottom:1px solid #dcdcdc;
        >span{
            font-size:@base*1.7rem;
        }
        >img{
            width:@base*.8rem;
            height:@base*1.4rem;
        }
    }
    #section{
        width:100%;
        margin-top:@base*5rem;
        >#search{
            width:100%;
            padding:0 @base*1.5rem;
            padding-top:@base*1.5rem;
            display: flex;
            flex-flow:row nowrap;
            justify-content:space-between;
            align-items:center;
            >#text{
                width:88%;
                height:@base*3.1rem;
                background:#eee;
                border-radius:@base*1.5rem;
                >input{
                    width:80%;
                    height:90%;
                    background:#eee;
                    border-radius: @base*1rem;
                    font-size:@base*1.5rem;
                }
                >img{
                    width:@base*1.6rem;
                    height:@base*1.6rem;
                    margin-left:@base*1.3rem;
                }
            }
            >span{
                font-size:@base*1.5rem;
            }
        }
        #result{
            margin-top:@base*.9rem;
            padding:0 @base*2rem;
            >div{
                width:100%;
                padding:@base*1.5rem 0;
                border-top:1px solid #dcdcdc;
                >p:first-child{
                    font-size:@base*1.4rem;
                    color:#333;
                }
                >p:nth-child(2){
                    font-size:@base*1.2rem;
                    color:#666;
                }
            }
        }
    }
}

</style>