import React,{Component} from "react";

class MenuKontak extends Component{
    constructor(props){
        super(props)
        this.state={
            Alamat:"Jl.Swadaya IV,Pd. Ranggon, Cipayung, Kota jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            Kontak:"081312345678"
        }
    }
    render(){
        return(
            <div><center>
                <h3>{this.state.Alamat}</h3>
                <h4>Kontak Kami: {this.state.Kontak}</h4>
                </center>
            </div>
        )
    }
    
}

export default MenuKontak