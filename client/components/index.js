import React, { Component } from 'react';
import { Link } from 'react-router';
var map;

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      binList: [],
      map: null
    };
  }
  componentDidMount() {
    var self = this;
    var mapElement = document.getElementById('map');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var mapOptions = {
          scrollwheel: true,
          zoom: 17,
          center: new google.maps.LatLng(pos.lat, pos.lng)
        };
        map = new google.maps.Map(mapElement, mapOptions);
        self.setState({
          map
        });
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(pos.lat, pos.lng),
          map: map,
          title: "gads!Bin",
        });
        // Specify location, radius and place types for your Places API search.
        var request = {
          location: new google.maps.LatLng(pos.lat, pos.lng),
          radius: '500',
          types: ['store']
        };

        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        var service = new google.maps.places.PlacesService(map);
        var binList = [];
        service.nearbySearch(request, function (results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            var countPos = results.length;
            
            for (var i = 0; i < countPos; i++) {

              var place = results[i];
              // If the request succeeds, draw the place location on
              // the map as a marker, and register an event to handle a
              // click on the marker.
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: {
                  url: 'img/trash.png',
                  scaledSize: new google.maps.Size(18, 18)
                }
              });
              var option = document.createElement("option");
              if (i === 0) {
                binList.push("zero");
              } else {
                option.text = place.name;
                option.id = i;
                self.binList.add(option);
                binList.push({ marker, place });
              }
            }
            self.setState({
              binList
            });
          }
        });
      }, function (error) {
        console.error(error);
      });
    } else {
      console.error("Browser doesn't support Geolocation");
    }
  }

  changeMarker = (e) => {
    var target = e.target;
    var value = target.selectedIndex;
    if (value !== 0) {
      var binList = this.state.binList;
      var marker = binList[value].marker;
      var place = binList[value].place;
      marker.setIcon({
        url: 'img/green-trash.png',
        scaledSize: new google.maps.Size(18, 18)
      });
      map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
      binList.map((bin, i) => {
        if (i !== value && i !== 0) {
          let marker = bin.marker;
          marker.setIcon({
            url: 'img/trash.png',
            scaledSize: new google.maps.Size(18, 18)
          });
        }
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.email.value = "";
    this.name.value = "";
    this.phone.value = "";
    this.company.value = "";
    this.message.value = "";
    swal("Success", "We will contact you in a moment!");
    return false;
  }
  
  render(){
    return(
      <div>
        <div className="preloader-inner">
          <div className="preloader"></div>
        </div>

        <header id="top-header" className="site-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <a href="#layout" className="site-header--logo">
                  <span>gads</span><span style={{color: "#65d840"}}>!Bin</span>
                </a>
              </div>
              <div style={{ display: "none" }} className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <nav id="main-menu" className="site-header--menu">
                  <ul>
                    <li><a href="#welcome">Welcome</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#get-app">Download</a></li>
                    <li><a href="#requirement">Requirement</a></li>
                    <li><a href="#contact">Sign Up</a></li>
                  </ul>
                </nav>
              </div>
              <div className="sandwitch">
                <div className="sw-top"></div>
                <div className="sw-mid"></div>
                <div className="sw-bot"></div>
              </div>
            </div>
          </div>
        </header>

        <div id="layout">
          <section id="welcome" className="s-welcome blue-bg" style={{display: "none"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="s-welcome--intro">
                    <h2>Showcase your apps</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <span>adipisicing</span> elit. Facere quidem eum ducimus suscipit <span>tempore</span> explicabo adipisci fugiat a quibusdam itaque!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur <span>adipisicing</span> elit. Facere quidem eum ducimus suscipit <span>tempore</span> explicabo adipisci fugiat a quibusdam itaque!</p>
                    <a href="https://themeforest.net/item/gravisapp-html-application-landing-page/20362031" target="_blank" className="btn btn-white btn-learn-more">Learn More</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="iphone-wrapper rellax-js" data-rellax-speed="4">
                    <img src="img/iphone.png" alt="Iphone" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="service" className="s-service" style={{ display: "none" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="s-text-title">
                    <h2>Service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa, nam illum repellendus quasi ipsa libero tempore magnam est iusto!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="s-service--one-service">
                    <div className="image">
                      <img src="img/service/setup.png" alt="Easy to Setup" />
                    </div>
                    <div className="text">
                      <h3>Easy to Setup</h3>
                      <p>Customizing it to fit the need of your app has never been easier.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="s-service--one-service">
                    <div className="image">
                      <img src="img/service/design.png" alt="Impressive design" />
                    </div>
                    <div className="text">
                      <h3>Impressive design</h3>
                      <p>With carefull thought-out design, gads!Bin looks great on any devices.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="s-service--one-service">
                    <div className="image">
                      <img src="img/service/code.png" alt="Clean code" />
                    </div>
                    <div className="text">
                      <h3>Clean code</h3>
                      <p>Completely W3C valid and clean code for you.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <div className="s-service--one-service">
                    <div className="image">
                      <img src="img/service/support.png" alt="24/7 Support" />
                    </div>
                    <div className="text">
                      <h3>24/7 Support</h3>
                      <p>If you need help you can send email us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ display: "none" }} id="features" className="s-features gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="s-text-title">
                    <h2>Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa, nam illum repellendus quasi ipsa libero tempore magnam est iusto!</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="iphone-wrapper">
                    <img src="img/iphone.png" alt="Iphone" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="s-features--one-feature">
                    <div className="image">
                      <img src="img/features/design.png" alt="Impressive design" />
                    </div>
                    <div className="text">
                      <h3>Impressive design</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero, laudantium tenetur culpa, odit minus id aliquid sed.</p>
                    </div>
                  </div>
                  <div className="s-features--one-feature">
                    <div className="image">
                      <img src="img/features/setup.png" alt="Easy to setup" />
                    </div>
                    <div className="text">
                      <h3>Easy to setup</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero, laudantium tenetur culpa, odit minus id aliquid sed.</p>
                    </div>
                  </div>
                  <div className="s-features--one-feature">
                    <div className="image">
                      <img src="img/features/mac.png" alt="Retina Ready" />
                    </div>
                    <div className="text">
                      <h3>Retina Ready</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero, laudantium tenetur culpa, odit minus id aliquid sed.</p>
                    </div>
                  </div>
                  <div className="s-features--one-feature">
                    <div className="image">
                      <img src="img/features/quality.png" alt="High quality" />
                    </div>
                    <div className="text">
                      <h3>High quality</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero, laudantium tenetur culpa, odit minus id aliquid sed.</p>
                    </div>
                  </div>
                  <div className="s-features--one-feature">
                    <div className="image">
                      <img src="img/features/code.png" alt="Clean Code" />
                    </div>
                    <div className="text">
                      <h3>Clean Code</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero, laudantium tenetur culpa, odit minus id aliquid sed.</p>
                    </div>
                  </div>
                  <div className="s-features--one-feature">
                    <div className="image">
                      <img src="img/features/support.png" alt="24/7 Support" />
                    </div>
                    <div className="text">
                      <h3>24/7 Support</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero, laudantium tenetur culpa, odit minus id aliquid sed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ display: "none" }} id="screenshots" className="s-screenshots f2f2f2-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="s-text-title">
                    <h2>Screenshots</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa, nam illum repellendus quasi ipsa libero tempore magnam est iusto!</p>
                  </div>
                  <div className="s-screenshots--wrapper">
                    <div className="screenshots-iphone">
                      <img src="img/screenshots/iphone-sm.png" alt="iPhone" />
                    </div>
                    <div id="screenshots-slider" className="screenshot-images">
                      <div className="screenshot">
                        <img src="img/screenshots/s_1.png" alt="Screenshot" />
                      </div>
                      <div className="screenshot">
                        <img src="img/screenshots/s_2.png" alt="Screenshot" />
                      </div>
                      <div className="screenshot">
                        <img src="img/screenshots/s_3.png" alt="Screenshot" />
                      </div>
                      <div className="screenshot">
                        <img src="img/screenshots/s_1.png" alt="Screenshot" />
                      </div>
                      <div className="screenshot">
                        <img src="img/screenshots/s_2.png" alt="Screenshot" />
                      </div>
                      <div className="screenshot">
                        <img src="img/screenshots/s_3.png" alt="Screenshot" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ display: "none" }} id="testimonials" className="s-testimonials">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="s-text-title">
                    <h2>Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa, nam illum repellendus quasi ipsa libero tempore magnam est iusto!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div id="testimonials-slider" className="testimonials-slider">
                    <div className="new-testimonial clearfix">
                      <div className="left-part">
                        <div className="left-part--wrapper">
                          <div className="left-part--wrapper__center">
                            <p>As the <span>developer</span>, you’re going to be very close to your app, so close, in fact, that you may not be able to see the wood for the trees. That’s why it’s vital to get some other perspectives, ideally from people without a vested interest in the <span>app’s success</span>.</p>
                            <div className="creator">
                              <h4>Nastya Andreevna</h4>
                              <span>CEO "Company Name"</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-part">
                        <img src="img/testimonials/test_photo.jpg" alt="Test Photo" />
                      </div>
                    </div>
                    <div className="new-testimonial clearfix">
                      <div className="left-part">
                        <div className="left-part--wrapper">
                          <div className="left-part--wrapper__center">
                            <p>Lorem ipsum dolor sit amet, consectetur <span>adipisicing elit</span>. Accusantium autem molestias, hic consequuntur, accusamus ipsam, reiciendis maxime sunt quasi rerum suscipit?</p>
                            <div className="creator">
                              <h4>The man in the hat</h4>
                              <span>CEO "Company Name"</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-part">
                        <img src="img/testimonials/test_photo2.jpg" alt="Test Photo" />
                      </div>
                    </div>
                    <div className="new-testimonial clearfix">
                      <div className="left-part">
                        <div className="left-part--wrapper">
                          <div className="left-part--wrapper__center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, corporis alias nostrum recusandae culpa. Sed sunt non obcaecati, vero ipsam, aut, fugit consectetur asperiores rem culpa placeat quo, enim odit. At reiciendis consectetur totam deleniti laudantium sit, natus quia qui! Ipsum quis quos quidem, aliquid illum maxime veniam labore omnis!</p>
                            <div className="creator">
                              <h4>THe Night Space</h4>
                              <span>CEO "Company Name"</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-part">
                        <img src="img/testimonials/test_photo3.jpg" alt="Test Photo" />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-bar--wrapper">
                    <div id="ti-progress" className="testimonial-progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div style={{ display: "none" }} className="s-download-counts dark-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <ul className="app-small-info">
                    <li>
                      <div className="icon">
                        <i className="ion-social-android"></i>
                      </div>
                      <div className="text">
                        <span className="count">2 000 000</span>
                        <span className="device">Android Downloads</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="ion-social-apple"></i>
                      </div>
                      <div className="text">
                        <span className="count">5 000 000</span>
                        <span className="device">Apple Downloads</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="ion-social-windows"></i>
                      </div>
                      <div className="text">
                        <span className="count">30 000</span>
                        <span className="device">Windows Downloads</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section id="contact" className="s-contact">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="left height">
                    <div className="s-text-title">
                      <h2>Register a Trash Bin</h2>
                      <p>Write to us and we will reply <span>shortly</span>.</p>
                    </div>
                    <form id="contact-form" className="s-contact--form clearfix" method="POST">
                      <input type="hidden" name="project_name" value="gads!Bin" />
                      <input type="hidden" name="admin_email" value="youremail@domain.com" />
                      <input type="hidden" name="form_subject" value="Message from gads!Bin" />
                      <div className="w50 clearfix">
                        <div>
                          <label htmlFor="cf--name">Your name:</label>
                          <input ref={(ref) => this.name = ref} type="text" id="cf--name" name="name" placeholder="Your name" required />
                        </div>
                        <div>
                          <label htmlFor="cf--email">Your E-Mail:</label>
                          <input ref={(ref) => this.email = ref} type="email" id="cf--email" name="email" placeholder="Your E-Mail" required />
                        </div>
                      </div>
                      <label htmlFor="cf--messageTitle">Your Company</label>
                      <input ref={(ref) => this.company = ref} type="text" id="cf--messageTitle" name="message_theme" placeholder="Company Name" required />
                      <label htmlFor="cf--phone">Phone Number</label>
                      <input ref={(ref) => this.phone = ref} type="text" id="cf--phone" name="message_theme" placeholder="Your Phone Number" required />
                      <label style={{paddingRight: "10px"}}>Select a Trash Bin</label>
                      <select className="btn btn-learn-more" id="binList" ref={(ref) => this.binList = ref} onChange={this.changeMarker.bind(this)}>
                        <option>Choose</option>
                      </select>
                      <br />
                      <label htmlFor="cf--message">Message:</label>
                      <textarea ref={(ref) => this.message = ref} name="message" id="cf--message" placeholder="Your message here"></textarea>
                      <div className="center">
                        <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-submit"><i className="ion-paper-airplane"></i>Send</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div id="map" className="height"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}