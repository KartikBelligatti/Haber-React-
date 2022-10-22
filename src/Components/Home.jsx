import React from "react"; 
import '../Styles/home.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



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
 
  
   
    <section className="formdiv"  style={{height:400,backgroundColor:'black',marginTop:400}}>
            <div class="container text-center cform">
                <h2 class="text-primary">Quick Contact</h2>

                <form class='mailform' method="post" action="bat/rd-mailform.php">
                    <input type="hidden" name="form-type" value="contact"/>
                    <fieldset class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <label data-add-placeholder="">
                                <input type="text"
                                       name="name"
                                       placeholder="Name:"
                                       data-constraints="@LettersOnly @NotEmpty"/>
                            </label>

                            <label data-add-placeholder="">
                                <input type="text"
                                       name="email"
                                       placeholder="Email:"
                                       data-constraints="@Email @NotEmpty"/>
                            </label>

                            <label data-add-placeholder="">
                                <input type="text"
                                       name="phone"
                                       placeholder="Phone:"
                                       data-constraints="@Phone"/>
                            </label>
                        </div>

                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <label data-add-placeholder="" class="textarea">
                                                          <textarea name="message" placeholder="Message"
                                                                    data-constraints="@NotEmpty"></textarea>
                            </label>
                        </div>

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="mfControls">
                                <button class="btn btn-primary btn-sm" type="submit">send</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>





    

       
</>

 )
}


//only one export
export default FunctionalComponent;