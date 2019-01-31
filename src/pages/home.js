import React from 'react'
import { Link, withPrefix, navigate   } from 'gatsby'

import Odoo from 'odoo-xmlrpc'
import { Page, Toolbar, Button, Icon, Input } from 'react-onsenui'; 
import Clock from 'react-live-clock';

import Layout from '../components/layout'
import SEO from '../components/seo'

import { IoIosTime, IoIosContact } from 'react-icons/io';

import cardimg from '../images/card.png';

// import createStore from '../state/createStore';
// const store = createStore()
import ContentLoader from "react-content-loader"

const MyLoader = props => (
	<ContentLoader 
		height={'100vh'}
		width={'100vw'}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
		{...props}
	>
    <rect x="7.64" y="16.67" rx="0" ry="0" width="173.88" height="55.38" /> 
		<rect x="7.64" y="87.67" rx="0" ry="0" width="173.88" height="55.38" />
    <rect x="7.64" y="164.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="7.64" y={164.67 + 77.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="7.64" y={164.67 + 154.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="7.64" y={164.67 + 231.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="7.64" y={164.67 + 308.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="7.64" y={164.67 + 385.00} rx="0" ry="0" width="173.88" height="55.38" /> 

    <rect x="195.64" y="16.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y="87.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y="164.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y={164.67 + 77.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y={164.67 + 154.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y={164.67 + 231.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y={164.67 + 308.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x="195.64" y={164.67 + 385.00} rx="0" ry="0" width="173.88" height="55.38" /> 

    <rect x={195.64 + 188.00} y="16.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y="87.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y="164.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y={164.67 + 77.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y={164.67 + 154.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y={164.67 + 231.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y={164.67 + 308.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + 188.00} y={164.67 + 385.00} rx="0" ry="0" width="173.88" height="55.38" /> 

    <rect x={195.64 + (188.00 * 2)} y="16.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y="87.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y="164.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y={164.67 + 77.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y={164.67 + 154.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y={164.67 + 231.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y={164.67 + 308.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 2)} y={164.67 + 385.00} rx="0" ry="0" width="173.88" height="55.38" /> 

    <rect x={195.64 + (188.00 * 3)} y="16.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y="87.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y="164.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y={164.67 + 77.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y={164.67 + 154.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y={164.67 + 231.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y={164.67 + 308.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 3)} y={164.67 + 385.00} rx="0" ry="0" width="173.88" height="55.38" /> 	

    <rect x={195.64 + (188.00 * 4)} y="16.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y="87.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y="164.67" rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y={164.67 + 77.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y={164.67 + 154.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y={164.67 + 231.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y={164.67 + 308.00} rx="0" ry="0" width="173.88" height="55.38" /> 
    <rect x={195.64 + (188.00 * 4)} y={164.67 + 385.00} rx="0" ry="0" width="173.88" height="55.38" /> 	
    </ContentLoader>
)

var user = JSON.parse(localStorage.getItem("user"));

const odoo = new Odoo({
        url: user.url, 
        port: user.port,
        db: user.db,
        username: user.username,
        password: user.password
      }); 
class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      isAuthenticated: false,
      products:[],
      categories:[],
      myloader: 'show'
    }
    this.getProducts()
  }
  componentWillMount() {
    this._bootstrapAsync();

  }
  _bootstrapAsync = async () => {
    const userToken = await JSON.parse(localStorage.getItem("auth"));
    navigate(userToken ? '/home' : '/');
  }; 

  getProducts(){
      // Connect to Odoo
      console.log(user)
      odoo.connect(function (err) {
        if (err) { return console.log(err); }
        else{
          console.log('success')
            var inParams = [];
            inParams.push([["available_in_pos", "=", true]]); //domain
            inParams.push(
              ["name", "currency_id","categ_id", "product_variant_count", "list_price", "qty_available", "type", "product_variant_ids", "image", "uom_id", "default_code"]
            ); //fields
            inParams.push(); //offset
            inParams.push(); //limit
            var params = [];
            params.push(inParams);
            odoo.execute_kw('product.template', 'search_read', params, function (err, value) {
                if (err) { return console.log(err); }
                console.log('Result: ', value);
                localStorage.setItem("products",JSON.stringify(value))
                this.setState({products : value, myloader : 'hide'})
            }.bind(this));
            this.getCategs()
        }
      }.bind(this));
      
  }
  getCategs(){
    var inParams = [];
    inParams.push([]); //domain
    inParams.push(
      ["display_name"]
    ); //fields
    inParams.push(); //offset
    inParams.push(); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('product.category', 'search_read', params, function (err, value) {
        if (err) { return console.log(err); }
        console.log('Result: ', value);
        localStorage.setItem("categories",JSON.stringify(value))
        this.setState({categories : value})
    }.bind(this));
  }
  render(){
      return(
        <Layout>
        <SEO title="Home" />
            <div class="col-sm-2 left-panel categs">
              <ul>
                { this.state.categories.map(function(categs){
                  return (
                    <li key={categs.id} style={{listStyle: 'none',padding: '0'}} class="">
                      <Button onClick={(event) => { this.setState({categs: categs.id}) } } class="categs-button" modifier='outline' ripple>
                        { 
                            categs.display_name.substr(categs.display_name.lastIndexOf('/') + 1)
                          }
                      </Button>
                      
                    </li>
                  )
                })
                  
                }

              </ul>
                
            </div>
            <div
              class="col-sm-7 left-panel"
            >
              <div class="product-container ">
                <ul class="row" style={{margin: 0}}>
                <MyLoader style={{width: '95%',height: '100%',position: 'absolute'}} className={this.state.myloader} />
                { this.state.products.map(function(product){
                  return (
                    <li key={product.id} style={{listStyle: 'none',padding: '0'}} class="col-3">
                      <div class="card product bg-dark text-white " >
                        <img src={!product.image ? cardimg : "data:image/png;base64, " + product.image} class="card-img" />
                        <div class="card-img-overlay p-1">
                          <p class="card-text price text-right">RP {product.list_price}</p>
                          <h6 class="card-title name">{product.name}</h6>
                        </div>
                      </div>
                    </li>
                  )
                })
                  
                }
                </ul>
              </div>
            </div>
          <div class="col-sm-3 right-panel">
            <div class="header">
                  <h6>
                     <IoIosTime class="time" /> <Clock format="HH:mm:ss" ticking={true} interval={1000} />
                      
                  </h6>
                  <div class="text-right user-panel">
                      <IoIosContact class="icons time"/>
                      Administrator
                  </div>
            </div> 
            <div class="body">
            </div>
          </div>
        </Layout>
      )
  } 
    
}
export default HomePage