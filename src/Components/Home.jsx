import React from "react"; 
import '../Styles/home.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { MDBInput } from 'mdb-react-ui-kit';
import Form from './form';




function FunctionalComponent()
{
 return(
    <>
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide03.jpg?1666327776239"
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3><b>WE WILL HELP TO CREATE<br></br>YOUR WEALTH</b></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide02.jpg?1666327766319"
          alt="Second slide"
        />

        <Carousel.Caption className="caption">
          <h3><b>SIMPLE INVESTING<br></br>PROSPEROUS FUTURE</b></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide01.jpg?1666327764438"
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3><b>WE MEET YOUR FINANCIAL <br></br>INVESTMENT NEEDS</b></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
<br></br><br></br><br></br>
    <h1 style={{fontsize:180,padding:30,marginLeft:400,color:'#000'}}><b>OUR FOCUS IS OUR CLIENTS' SUCCESS</b></h1>

     <Card style={{ width: '18rem',float:'left',margin:30,marginLeft:110, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:30,height:30,marginLeft:25,marginTop:25}} variant="top" src="https://livedemo00.template-help.com/wt_55458/images/page-1_icon01.png" />
      </div>
      <Card.Body>
        <Card.Title style={{fontSize:15,marginLeft:90}}>&nbsp;PRIVATE<br></br>BANKING</Card.Title>
        <Card.Text style={{fontSize:13,marginLeft:10}}><br></br>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, exercitation ullamclaboris nisi ut aliquimex ea commodo
consequat.
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        
      <Button variant="outline-dark" className="readmore" style={{marginLeft:70}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',float:'left',margin:30, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:30,height:30,marginLeft:25,marginTop:25}} variant="top" src="https://livedemo00.template-help.com/wt_55458/images/page-1_icon02.png" />
      </div>
      <Card.Body>
        <Card.Title style={{fontSize:15,marginLeft:90}}>&nbsp;PRIVATE<br></br>BANKING</Card.Title>
        <Card.Text style={{fontSize:13,marginLeft:10}}><br></br>
        Asum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, exercitation laboris nisi ut.
massa aliquip
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        
      <Button variant="outline-dark" className="readmore" style={{marginLeft:70}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',float:'left',margin:30, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:30,height:30,marginLeft:25,marginTop:25}} variant="top" src="https://livedemo00.template-help.com/wt_55458/images/page-1_icon03.png" />
      </div>
      <Card.Body>
        <Card.Title style={{fontSize:15,marginLeft:90}}>&nbsp;PRIVATE<br></br>BANKING</Card.Title>
        <Card.Text style={{fontSize:13,marginLeft:10}}><br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, exercitation ullamco.
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        
      <Button variant="outline-dark" className="readmore" style={{marginLeft:70}}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',float:'left',margin:30, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:30,height:30,marginLeft:25,marginTop:25}} variant="top" src="https://livedemo00.template-help.com/wt_55458/images/page-1_icon04.png" />
      </div>
      <Card.Body>
        <Card.Title style={{fontSize:15,marginLeft:90}}>&nbsp;PRIVATE<br></br>BANKING</Card.Title>
        <Card.Text style={{fontSize:13,marginLeft:10}}><br></br>
        Dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, exercitation ullamco. laboris nisi ut aliquip.
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
        
      <Button variant="outline-dark" className="readmore" style={{marginLeft:70}}>Read More</Button>
      </Card.Body>
    </Card>

    <div className="advice" >
    <br></br><br></br>
    <h1 style={{fontsize:180,padding:30,marginLeft:270,color:'#3e4952'}}><b>ADVICE ON HOW TO MAKE WISE INVESTMENTS</b></h1>
<p style={{fontSize:22,marginLeft:160,color:'#3e4952'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
    <Card style={{ width: '23rem',float:'left',margin:30,marginLeft:160, border:'none' }}>
      <Card.Img style={{padding:10}} className="cardimg" variant="top" src="https://livedemo00.template-help.com/wt_55458/images/page-1_img01.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:25,marginLeft:70, color:'orangered'}}><b>Aut perferendis</b></Card.Title>
        <Card.Text style={{fontSize:14, }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing
&nbsp;elit, sed do eiusmod tempor incididunt ut labore.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;et dolore magna aliqua. Ut enim ad minim
        </Card.Text>
        <i href="#" style={{fontSize:30,marginLeft:150}} class="fa fa-arrow-circle-o-right"></i><br></br><br></br>
      </Card.Body>
    </Card>

    <Card style={{ width: '23rem',float:'left',margin:30, border:'none' }}>
      <Card.Img style={{padding:10}} variant="top" className="cardimg" src="https://livedemo00.template-help.com/wt_55458/images/page-1_img02.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:25, marginLeft:100, color:'orangered'}}><b>Laoreetum</b></Card.Title>
        <Card.Text style={{fontSize:14, }}>
        Massa dolor sit amet, consectetur adipisicing elit, sed
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do eiusmod tempor incididunt ut labore est. et &nbsp;&nbsp;&nbsp;&nbsp;dolore
magna aliqua. Ut enim ad minim veniam
        </Card.Text>
        <i href="#" style={{fontSize:30,marginLeft:150}} class="fa fa-arrow-circle-o-right"></i><br></br><br></br>

      </Card.Body>
    </Card>

    <Card style={{ width: '23rem',float:'left',margin:30, border:'none' }}>
      <Card.Img style={{padding:10}} variant="top" className="cardimg" src="https://livedemo00.template-help.com/wt_55458/images/page-1_img03.jpg" />
      <Card.Body>
        <Card.Title style={{fontSize:25, marginLeft:90, color:'orangered'}} ><b>Fuod maxime</b></Card.Title>
        <Card.Text style={{fontSize:14, }}>
        &nbsp;Ed dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut et dolore magna aliqua.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ut enim ad minim veniam, quis nostru
        </Card.Text>
        <i href="#" style={{fontSize:30,marginLeft:150}} class="fa fa-arrow-circle-o-right"></i><br></br><br></br>

      </Card.Body>
    </Card>
    </div>

    <div>
    <section class="wr">

<div class="container well3">
    <div class="col-md-6 col-sm-6 col-xs-12 pd-zero" style={{float:'left',width:759.5,height:430,background:'rgb(253, 106, 52)',marginLeft:-112,color:'white'}}>
        <h3 style={{marginLeft:150,marginTop:40,fontSize:35}} class="white"><b>Fresh Investment Solutions!</b></h3>
        <ul class="marked-list white" style={{marginLeft:120,marginTop:40,listStyle:'none',fontSize:18}}>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Dolor sit amet, consectetur adipisicing</a></li>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Sed do eiusmod tempor incididunt ut labore</a></li>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Et dolore magna aliquat enim ad minim veniam</a></li>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Duis nostrud exercitation ullamco laboris</a></li>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Ex ea commodo consequat</a></li>
        </ul>
        <Button style={{marginLeft:150}} variant="outline-light">Learn more</Button>{' '}
    </div>


    <div class="col-md-6 col-sm-6 col-xs-12 pd-zero" style={{float:'left',width:759.5,height:430,background:'#3e4952',marginLeft:647,marginTop:-430,color:'white'}}>
    <h3 style={{marginLeft:70,marginTop:40,fontSize:35,color:'white'}} class="white"><b>Learning to Save Money</b></h3>
    <ul class="marked-list white" style={{marginLeft:40,marginTop:40,listStyle:'none',fontSize:18}}>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing</a></li>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Sed do eiusmod tempor incididunt ut labore</a></li>
            <li style={{paddingTop:7}}><i class="fa fa-solid fa-gear"></i><a >&nbsp;&nbsp;Ut enim ad minim veniam quis nostrud exercitation</a></li>
           
        </ul>
        <p style={{marginLeft:75}}>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br></br> 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br></br>
         exercitation ullamco laboris nisi ut aliquip. </p>
         <Button style={{marginLeft:75}} variant="outline-light">Learn more</Button>{' '}
    </div>

</div>
<br></br><br></br>
</section>

    </div>
 
  
    <marquee style={{marginTop:50}}>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg"></img>
  <img style={{paddingLeft:50}} src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg"></img>

</marquee>
    <section  style={{height:400,backgroundColor:'black',marginTop:0}}>
           <Form/>
           <br></br><br></br><br></br>
        </section>



<div>
  
</div>

<br></br><br></br><br></br>

<Card style={{ width: '18rem',float:'left',margin:30,marginLeft:100, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:40,height:40,marginLeft:20,marginTop:22,}} variant="top" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-map-icon.png" />
      </div>
      <Card.Body style={{marginTop:-80, marginLeft:90, width:400}} >
      <Card.Title style={{fontSize:15,marginLeft:90}}><b>NEW YORK 9870 ST VINCENT <br></br>
      GLASGOW</b></Card.Title>      
      </Card.Body>
    </Card>
  
     

<Card style={{ width: '18rem',float:'left',margin:30,marginLeft:110, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:40,height:40,marginLeft:20,marginTop:20}} variant="top" src="https://www.freeiconspng.com/thumbs/telephone-icon/mobile-phone-icon-phone-telephone-icon-22.png" />
      </div>
      <Card.Body style={{marginTop:-80, marginLeft:90, width:400}} >
      <Card.Title style={{fontSize:15,marginLeft:90}}><b>CALL US:<br></br>
+1 800 603 6035</b></Card.Title>      
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem',float:'left',margin:30,marginLeft:110, border:'none' }}>
        <div className="img">
      <Card.Img style={{width:65,height:40,marginLeft:7,marginTop:20}} variant="top" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" />
      </div>
      <Card.Body style={{marginTop:-70, marginLeft:90, width:400}} >
      <Card.Title style={{fontSize:15,marginLeft:90}}><b>CONTACT@DEMOLINK.ORG<br></br>
</b></Card.Title>      
      </Card.Body>
      
    </Card>
  
<br></br><br></br><br></br>

<div style={{width:1518, height:500, backgroundColor:'grey', marginTop:100}}>
  <br></br><br></br><br></br>
<h5 ><b>HABER<span style={{}}> © 2022 Privacy policy</span></b></h5>

  <ul style={{listStyle:'none',}}>
  <li ><a style={{  marginTop:10,marginLeft:150,fontSize:40, color:'#fff', float:'left'}}  href="#" class="fa fa-twitter-square"   id="twit"></a></li>
                <li><a style={{  marginTop:10,marginLeft:20,fontSize:40, color:'#fff', float:'left'}} href="#" class="fa fa-youtube"></a></li>
                <li><a style={{  marginTop:10,marginLeft:20,fontSize:40,color:'#fff', float:'left'}} href="#" class="fa fa-rss"></a></li>
                <li><a style={{  marginTop:10,marginLeft:20,fontSize:40,color:'#fff', float:'left'}} href="#" class="fa fa-facebook-square"></a></li>
                <li><a style={{  marginTop:10,marginLeft:20,fontSize:40,color:'#fff', float:'left'}} href="#" class="fa fa-google-plus-square"></a></li>
            
  </ul>
  <div className="google-map-code" style={{}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="250" frameborder="0" style={{border:0, marginLeft:300, marginTop:-50}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

</div>




</>

 )
}


//only one export
export default FunctionalComponent;