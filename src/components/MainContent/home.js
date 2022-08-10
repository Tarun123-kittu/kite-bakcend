import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import "./style.css"
const Home = () => {
return (
<div className='content_outer'>
   
   <div className='content'>
      <Form>
         <Row>
            <Col lg={2}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Period</Form.Label>
               <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="Yesterday">Yesterday</option>
                  <option value="seven_days">Last seven days</option>
                  <option value="last_month">Last month</option>
                  <option>Custom date</option>
               </Form.Select>
            </Form.Group>
            </Col>
            <Col md={3} lg={2}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Date Range</Form.Label>
               <Form.Control type="text" placeholder="Create Date" />
            </Form.Group>
            </Col>
            <Col md={4} lg={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Campaign</Form.Label>
               <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value=" UIP- Sing 2 BO sustain "> UIP- Sing 2 BO sustain </option>
                  <option value=" Viacom - Paw Patrol Arg"> Viacom - Paw Patrol Arg</option>
                  <option value="Alpina - Bon Yurt Mini Masmelos">Alpina - Bon Yurt Mini Masmelos</option>
                  <option value="Alquería - Alquemix Abr- Jun">Alquería - Alquemix Abr- Jun</option>
                  <option value="Baby Alive Mar 2022">Baby Alive Mar 2022</option>
                  <option value="Caffaro - Campañas May-Ago 2022">Caffaro - Campañas May-Ago 2022</option>
                  <option value="Cajita Feliz - Clean label - GT ">Cajita Feliz - Clean label - GT </option>
                  <option value="Cajita Feliz - Clean label - NI">Cajita Feliz - Clean label - NI</option>
                  <option value="Cajita Feliz - Clean label - SV">Cajita Feliz - Clean label - SV</option>
                  <option value="Campaña 2022">Campaña 2022</option>
                  <option value="Choco Wow Febrero BTS">Choco Wow Febrero BTS</option>
                  <option value="ChocoWow - PAN - NC - May-Jun-Jul">ChocoWow - PAN - NC - May-Jun-Jul</option>
                  <option value="Fevereiro 2022">Fevereiro 2022</option>
                  <option value="Filme Bad Guys">Filme Bad Guys</option>
                  <option value="General Motors - Campaña Anti bullying mayo">General Motors - Campaña Anti bullying mayo</option>
                  <option value="General Motors- Campaña antibullying abril cont CL">General Motors- Campaña antibullying abril cont CL</option>
                  <option value="Gobierno de Chile - CONASET Educación Vial Marzo CL ">Gobierno de Chile - CONASET Educación Vial Marzo CL </option>
                  <option value="Hasbro - Gaming Classics EXPO Mar 22">Hasbro - Gaming Classics EXPO Mar 22</option>
                  <option value="Hasbro - Snacking Grogu EM">Hasbro - Snacking Grogu EM</option>
                  <option value="Hotel Transilvânia 4 - Transformonstrão">Hotel Transilvânia 4 - Transformonstrão</option>
                  <option value="Jr. NBA _Agência Octagon_ABRIL de 2022">Jr. NBA _Agência Octagon_ABRIL de 2022</option>
                  <option value="Jr. NBA_Octagon_Março2022">Jr. NBA_Octagon_Março2022</option>
                  <option value="Jr.NBA_Octagon_Maio_2022">Jr.NBA_Octagon_Maio_2022</option>
                  <option value="Junho 2022">Junho 2022</option>
                  <option value="Lego Super Mario/ Friends">Lego Super Mario/ Friends</option>
                  <option value="Matific Nov 2021">Matific Nov 2021</option>
                  <option value="Mattel - Jurassic World Dominion">Mattel - Jurassic World Dominion</option>
                  <option value="Mc Donalds - Cajita Feliz - Walt Disney - Ene - Feb ">Mc Donalds - Cajita Feliz - Walt Disney - Ene - Feb </option>
                  <option value="Mc Donalds - Cajita Feliz Bob Esponja - CR">Mc Donalds - Cajita Feliz Bob Esponja - CR</option>
                  <option value="Mc Donalds - Cajita Feliz Bob Esponja - GT ">Mc Donalds - Cajita Feliz Bob Esponja - GT </option>
                  <option value="Mc Donalds - Cajita Feliz Bob Esponja Co">Mc Donalds - Cajita Feliz Bob Esponja Co</option>
                  <option value="Mc Donalds - Cajita Feliz Stitch - Mar/Abr - GT">Mc Donalds - Cajita Feliz Stitch - Mar/Abr - GT</option>
                  <option value="Mc Donalds - Cajita Feliz Stitch Mayo Co">Mc Donalds - Cajita Feliz Stitch Mayo Co</option>
                  <option value="MC DONALDS- CAJITA FELIZ SONIC ABR/MAY">MC DONALDS- CAJITA FELIZ SONIC ABR/MAY</option>
                  <option value="Minions 2 BR">Minions 2 BR</option>
                  <option value="MOTU kids">MOTU kids</option>
                  <option value="Nintendo - Brasil Brand Campaign FY22Q4">Nintendo - Brasil Brand Campaign FY22Q4</option>
                  <option value="Nintendo - Brasil Brand Campaign FY23Q1">Nintendo - Brasil Brand Campaign FY23Q1</option>
                  <option value="Nintendo - ELSA FY23Q1">Nintendo - ELSA FY23Q1</option>
                  <option value="Nintendo - Kirby and the Forgotten Land FY22Q4">Nintendo - Kirby and the Forgotten Land FY22Q4</option>
                  <option value="Nintendo - New Year Celebrity FY22Q4">Nintendo - New Year Celebrity FY22Q4</option>
                  <option value="Nintendo - Pokemon Legends FYQ422">Nintendo - Pokemon Legends FYQ422</option>
                  <option value="Nintendo - Switch Kids &amp; Parents FY23Q1">Nintendo - Switch Kids &amp; Parents FY23Q1</option>
                  <option value="Nintendo - Switch Sports FY23Q1">Nintendo - Switch Sports FY23Q1</option>
                  <option value="Nintendo Switch FY 22 Q4">Nintendo Switch FY 22 Q4</option>
                  <option value="Nosotras - Curvy ">Nosotras - Curvy </option>
                  <option value="Paramount + Paw Patrol Mayo">Paramount + Paw Patrol Mayo</option>
                  <option value="Paramount - Paws of fury trailer CL">Paramount - Paws of fury trailer CL</option>
                  <option value="Paramount - Sonic 2 AR">Paramount - Sonic 2 AR</option>
                  <option value="Paramount - Sonic 2 continuacion abril CL">Paramount - Sonic 2 continuacion abril CL</option>
                  <option value="Paramount - Sonic 2 trailer CL - Chile">Paramount - Sonic 2 trailer CL - Chile</option>
                  <option value="Paris Filmes_D.P.A 3_Agência Vibezz_Mar22">Paris Filmes_D.P.A 3_Agência Vibezz_Mar22</option>
                  <option value="PEDIASURE CAM FEB22">PEDIASURE CAM FEB22</option>
                  <option value="Petrizzio - Itzy - Chile">Petrizzio - Itzy - Chile</option>
                  <option value="Pollo Campero - always On - Junio">Pollo Campero - always On - Junio</option>
                  <option value="Pollo Campero Niños - Always On - Mayo ">Pollo Campero Niños - Always On - Mayo </option>
                  <option value="Serenito Minions UY 22">Serenito Minions UY 22</option>
                  <option value="SING 2">SING 2</option>
                  <option value="Solzinho 2022">Solzinho 2022</option>
                  <option value="Sonic 2 - Paramount">Sonic 2 - Paramount</option>
                  <option value="SONIC 2 La Película UIP ">SONIC 2 La Película UIP </option>
                  <option value="Subsecretaría de la niñez - Derecho de los niños">Subsecretaría de la niñez - Derecho de los niños</option>
                  <option value="Sunny - Harry potter Abril 2022">Sunny - Harry potter Abril 2022</option>
                  <option value="Sunny - Shimmer Me 202205">Sunny - Shimmer Me 202205</option>
                  <option value="Sunny - The Batman">Sunny - The Batman</option>
                  <option value="Sunny_TechDeck_202204">Sunny_TechDeck_202204</option>
                  <option value="UIP - Gato con botas 2 trailer AR">UIP - Gato con botas 2 trailer AR</option>
                  <option value="UIP - Gato con botas 2 trailer Vzla">UIP - Gato con botas 2 trailer Vzla</option>
                  <option value="UIP - Gatos con Botas trailer EC">UIP - Gatos con Botas trailer EC</option>
                  <option value="UIP - Jurassic World Dominion">UIP - Jurassic World Dominion</option>
                  <option value="UIP - Jurassic World Dominion Vzla">UIP - Jurassic World Dominion Vzla</option>
                  <option value="UIP - Lanzamiento Bad Guys - Feb/Mar">UIP - Lanzamiento Bad Guys - Feb/Mar</option>
                  <option value="UIP - Minions 2">UIP - Minions 2</option>
                  <option value="UIP - Minions 2 Trailer 4">UIP - Minions 2 Trailer 4</option>
                  <option value="UIP - Minions 2 Trailer Vzla">UIP - Minions 2 Trailer Vzla</option>
                  <option value="UIP - Sonic 2 PE continuación abril">UIP - Sonic 2 PE continuación abril</option>
                  <option value="UIP - The Bad Guys Caribe">UIP - The Bad Guys Caribe</option>
                  <option value="UIP - The bad guys PY">UIP - The bad guys PY</option>
                  <option value="UIP - The bad guys Trailer CL">UIP - The bad guys Trailer CL</option>
                  <option value="UIP - The Bad guys trailer feb 2022 BO">UIP - The Bad guys trailer feb 2022 BO</option>
                  <option value="UIP - The Bad guys Vzla ">UIP - The Bad guys Vzla </option>
                  <option value="UIP - Trailer Blazing Samurai - Abr">UIP - Trailer Blazing Samurai - Abr</option>
                  <option value="UIP - Trailer Minions CAM - Jun">UIP - Trailer Minions CAM - Jun</option>
                  <option value="UIP - Trailer Minions Junio ">UIP - Trailer Minions Junio </option>
                  <option value="UIP -SONIC 2 LANZAMIENTO MAR">UIP -SONIC 2 LANZAMIENTO MAR</option>
                  <option value="UIP BAD GUYS - CAM">UIP BAD GUYS - CAM</option>
                  <option value="UIP- Gato con botas trailer BO">UIP- Gato con botas trailer BO</option>
                  <option value="UIP- Minions 2 Trailer BO">UIP- Minions 2 Trailer BO</option>
                  <option value="UIP- Minions 2 trailer CL">UIP- Minions 2 trailer CL</option>
                  <option value="UIP- Minions 2 UY">UIP- Minions 2 UY</option>
                  <option value="UIP- The bad guys trailer AR">UIP- The bad guys trailer AR</option>
                  <option value="UIP-The puss in boots trailer CL">UIP-The puss in boots trailer CL</option>
                  <option value="Universal - Gabbys Dollhouse Cartoonito BR">Universal - Gabbys Dollhouse Cartoonito BR</option>
                  <option value="Universal Gabbys DollHouse - BR+ ROLA - Adicional 2022">Universal Gabbys DollHouse - BR+ ROLA - Adicional 2022</option>
                  <option value="Universal-Gabbys Dollhouse Cartoonito">Universal-Gabbys Dollhouse Cartoonito</option>
                  <option value="UNIVERSIDAD EL BOSQUE 2022">UNIVERSIDAD EL BOSQUE 2022</option>
                  <option value="Voligoma BTS 2022">Voligoma BTS 2022</option>
                  <option value="Walmart Verano - Disney - Abr">Walmart Verano - Disney - Abr</option>
                  <option value="Warner - Emilia">Warner - Emilia</option>
                  <option value="Warner Media: Animales Fantásticos 3">Warner Media: Animales Fantásticos 3</option>
               </Form.Select>
            </Form.Group>
            </Col>
            <Col lg={2} md={3} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Format</Form.Label>
               <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option selected="" value=""></option>
                  <option value="Branded Video (AA)">Branded Video (AA)</option>
                  <option value="Bumper Ads / URL YouTube (KSV)">Bumper Ads / URL YouTube (KSV)</option>
                  <option value="Interstitial / Carousel (AA)">Interstitial / Carousel (AA)</option>
                  <option value="Interstitial / Filmstrip (AA)">Interstitial / Filmstrip (AA)</option>
                  <option value="Interstitial / Minigame (AA)">Interstitial / Minigame (AA)</option>
                  <option value="Interstitial Tradicional (AA)">Interstitial Tradicional (AA)</option>
                  <option value="Pre Roll - In stream / URL YouTube (KSV)">Pre Roll - In stream / URL YouTube (KSV)</option>
                  <option value="Pre Roll 30¨ (AA / Programatic)">Pre Roll 30¨ (AA / Programatic)</option>
               </Form.Select>
            </Form.Group>
            </Col>
            <Col sm={12} md={12} lg={3}>
            <div className="d-flex align-items center submit_btn">
            <Form.Group className="mb-3 " controlId="formBasicEmail">
               <Form.Label style={{ opacity:"0" }}>Search</Form.Label><br/>
               <Button  variant="outline-primary" >
               Search
               </Button>
            </Form.Group>
            <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
               <Form.Label style={{ opacity:'0' }}>Reset</Form.Label> <br/>
               <Button variant="outline-danger" >
               Reset
               </Button>
            </Form.Group>
            </div>
            </Col>
            {/* <Col sm={2}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label style={{ opacity:'0' }}>Reset</Form.Label> <br/>
               <Button variant="outline-danger" >
               Reset
               </Button>
            </Form.Group>
            </Col> */}
         </Row>
         <Row>
            <Col lg={3} md={6}>
            <div className="card_outer">
               <h4>166,492,932</h4>
               <p>Impressions</p>
            </div>
            </Col>
            <Col lg={3} md={6}>
            <div className="card_outer">
               <h4>166,492,932</h4>
               <p>Views</p>
            </div>
            </Col>
            <Col lg={3} md={6}>
            <div className="card_outer">
               <h4>166,492,932</h4>
               <p>Clicks</p>
            </div>
            </Col>
            <Col lg={3} md={6}>
            <div className="card_outer">
               <h4>166,492,932</h4>
               <p>Engagements</p>
            </div>
            </Col>
         </Row>
         <Row>
            <Col lg={3} md={12}>
            <Row>
               <Col lg={12} md={6}>
               <div className="card_outer">
                  <h4>166%</h4>
                  <p>CPCV</p>
               </div>
               </Col>
               <Col lg={12} md={6}>
               <div className="card_outer">
                  <h4>166%</h4>
                  <p>CTR</p>
               </div>
               </Col>
               <Col lg={12} md={12}>
               <div className="card_outer">
                  <h4>166%</h4>
                  <p>Engagement Rate</p>
               </div>
               </Col>
            </Row>
            </Col>
            <Col lg={9} md={12}>
            <div className="card_outer statistics">
                    <h2>Statistics</h2>
                </div>
            </Col>
         </Row> 

         <Row>
            <Col lg={8} md={12}>
            <div className="card_outer statistics p-0">
            <h2 className='p-4'>Formats</h2>
      <div className='format'>
       <Table  responsive >
      <thead>
        <tr>
          <th>FORMAT</th>
          <th>IMPRESSIONS</th>
          <th>VIEWS</th>
          <th>CLICKS</th>
          <th>ENGAGEMENTS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
      
      </tbody>
    </Table>
</div>

                </div>
            </Col>
            <Col lg={4} md={12}>
            <div className="card_outer">
                   <h2> Device Usage world Wide</h2>
            </div>
            </Col>
         </Row>

      </Form>
   </div>
</div>
)
}
export default Home