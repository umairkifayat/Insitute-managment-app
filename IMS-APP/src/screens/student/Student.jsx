import React, { useEffect, useState } from 'react';
import MenuAppBar from '../../componenets/navbar/Navbar';
import { getData, auth } from '../../config/firebaseconfig/firebasemethods';
import { onAuthStateChanged } from 'firebase/auth';
import UserInfo from '../card/Card';

const Student = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);

        getData('students', uid).then((res) => {
          setArr(res);
        });
      }
    });
  }, []);

  return (
    <>
     
      {/* {console.log(arr)} */}

    

      
      <MenuAppBar data={arr} />
      <UserInfo />
    </>
  );
};

export default Student;