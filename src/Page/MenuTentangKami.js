import React,{Component} from "react";

class MenuTentangKami extends Component{
    constructor (props){
        super(props)
        this.state = {
            Tentang : "Warung Nusantara Adalah Restoran yang Bernuansa Makanan Nusantara, Kami Ada untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
        }

    }
    render(){
        return(
            <div><center>
                <p>Tentang Kami</p>{this.state.Tentang}
                </center>
            </div>
        )
    }
}
export default MenuTentangKami