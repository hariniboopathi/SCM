import React,{ useState, useEffect,useContext} from "react";

import{
  Table,
  Form,
  Services,
  Profile,
  GetShipment,
  CompleteShipment,
  StartShipment
} from "../Components/index";

import{ Tracking } from "../Context/Tracking";

const index = () => {
  const{
    currentUser,
    createShipment,
    getAllShipments,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  }= useContext(Tracking);


  const [createShipmentModel,  setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile]= useState(false) ;
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal]= useState(false);
  const [getModel, setGetModel] = useState(false);

  const [allShipmentsdata, setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaignsData = getAllShipments;

    return async()=>{
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
    };
  },[]);

  return(
    <>
    <Services
    setOpenProfile={ setOpenProfile}
    setCompleteModal={ setCompleteModal}
    setGetModel ={ setGetModel}
    setStartModal={setStartModal}
    />

    <Table
    setCreateShipmentModel={ setCreateShipmentModel}
    allShipmentsdata={ allShipmentsdata}
    />

    <Form
    createShipmentModel={createShipmentModel}
    createShipment={createShipment}
    setCreateShipmentModel={setCreateShipmentModel}
    />
    
    <Profile
    openProfile={openProfile}
    setOpenProfile={setOpenProfile}
    currentUser={currentUser}
    getShipmentsCount={getShipmentsCount}
    />

    <CompleteShipment
    completeModal={completeModal}
    setCompleteModal={setCompleteModal}
    completeShipment={completeShipment}
    />

    <GetShipment
    getmodel={getModel}
    setGetModel={setGetModel}
    getShipment={ getShipment}
    />

    <StartShipment
    startModal={startModal}
    setStartModal={setStartModal}
    startShipment= {startShipment} 
    />
    </>
  );
};

export default index;
