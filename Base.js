AFRAME.registerComponent("base",{
    schema:{
        radius:{type:"number",default:17},
        height:{type:"number",default:0.5} ,
        
    },

    init:function(){
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        })

        this.el.setAttribute("material",{color:"#ffd966"})
    }
}) 