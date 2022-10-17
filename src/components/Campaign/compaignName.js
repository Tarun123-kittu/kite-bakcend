import React from 'react'
import './campaign.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const CompaignName = () => {
    const advert = [
        {
            id: 1,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 4,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 3,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 2,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        }
    ]
    const campaign = [
        {
            Campiagn_id:1,
        CampaignName:"ultivic",
        Product:"my demo",
        MPcurrency:200,
        BudgetUSD:500,
        Start_date:12,
        End_date:15 ,
        Status:'enabel'
    },
        {
            Campiagn_id:1,
        CampaignName:"ultivic",
        Product:"my demo",
        MPcurrency:200,
        BudgetUSD:500,
        Start_date:12,
        End_date:15 ,
        Status:'enabel'
    },
        {
            Campiagn_id:1,
        CampaignName:"ultivic",
        Product:"my demo",
        MPcurrency:200,
        BudgetUSD:500,
        Start_date:12,
        End_date:15 ,
        Status:'enabel'
    },
        {
            Campiagn_id:1,
        CampaignName:"ultivic",
        Product:"my demo",
        MPcurrency:200,
        BudgetUSD:500,
        Start_date:12,
        End_date:15 ,
        Status:'enabel'
    },
]
  return (
    <div className="content_outer">
    <div className="content">
        <div className="App">
                <div className='mediaplan_details mb-3'>
                    <h2>Compaign Details</h2>
                    <div className='advert_tabel'>
                <Table responsive="sm" bordered >
                    <thead>
                        <tr>
                            <th>Advertiser</th>
                            <th>Budget</th>
                            <th>Agency</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Market</th>
                            <th>Currency</th>
                            <th>Budget usd</th>
                            <th>Kick back</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                    </tbody>
                </Table>  
                    </div>
                </div>
          
            </div>
            {/* filter ends */}
            <div className='advert_tabel'>

                <div className='new_compaign'>
               <h2 className='mt-3'>Compaign Line Items</h2>
             <div className='cmn_border'>
             <div className='campiagn_outer border-0 p-0'>

<div className="campiagn_filter">
    <h3 className='m-0'>Filter</h3>
    <div className='add_filter'>



        <div className='filter_menu'>
            <Dropdown className='advert'>
                <Dropdown.Toggle id="dropdown-autoclose-true" >
                    Add Filter
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <ul>
                        <li>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-autoclose-true">
                                    Advertiser
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='advertiser'>
                                    <div>
                                        <p>Contains</p>
                                        <div>
                                            <label htmlFor="">Any of the following values</label>
                                            <input type="text" />
                                        </div>
                                        <button>Apply</button>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>ID Media Plan</li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-autoclose-true1">
                                    Market
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#">LATAM</Dropdown.Item>
                                    <Dropdown.Item href="#">Brasil</Dropdown.Item>
                                    <Dropdown.Item href="#">Mexico</Dropdown.Item>
                                    <Dropdown.Item href="#">Rola</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-autoclose-true3">
                                    Owner
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-autoclose-true3">
                                            Sales
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <Dropdown.Item href="#">Edurado Cavrea</Dropdown.Item>
                                            <Dropdown.Item href="#">Aline deAlmeida</Dropdown.Item>
                                            <Dropdown.Item href="#">Humberto Galdieri</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>


                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-autoclose-true4">
                                            Account Manager
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <Dropdown.Item href="#">Emiliano Bossi</Dropdown.Item>
                                            <Dropdown.Item href="#">Tomas Castro</Dropdown.Item>
                                            <Dropdown.Item href="#">Michele Diaz</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>



                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-autoclose-true5">
                                            Adops
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu >
                                            <Dropdown.Item href="#">Paula Lopez</Dropdown.Item>
                                            <Dropdown.Item href="#">Superuser Adops</Dropdown.Item>
                                            <Dropdown.Item href="#">Daniel Fernandaz</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-autoclose-true6">
                                    Status
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item href="#">New</Dropdown.Item>
                                    <Dropdown.Item href="#">Active</Dropdown.Item>
                                    <Dropdown.Item href="#">Inactive</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                    </ul>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    </div>
    <button className='cmn_btn'>Go</button>
</div>
                    <div className='newcampaign mt-3'>
                    <button className='cmn_btn ms-0'>  <FontAwesomeIcon  className='me-2' icon={faPlus} />Compaign Line Items</button>
                    </div>
                    <Table responsive="sm" bordered >
                        <thead>
                            <tr>
                                <th>Line Item ID</th>
                                <th>LI Name</th>
                                <th>Inventory Type</th>
                                <th>Format</th>
                                <th>Offer Type</th>
                                <th>Country</th>
                                <th>Budget in Mp Currency</th>
                                <th>Sell rate  Mp Currency</th>
                                <th>Goal</th>
                                <th>Start Date</th>
                                <th>End Dtate</th>
                                <th>Creatives</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                                              </tbody>
                    </Table>
                </div>
                </div>
     
          
            </div>
        </div>
    </div>
</div>
  )
}

export default CompaignName