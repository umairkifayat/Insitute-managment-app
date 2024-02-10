import React, { useEffect, useState } from 'react';
import MenuAppBar from '../../componenets/navbar/Navbar';
import { getData } from '../../config/firebaseconfig/firebasemethods';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseconfig/firebase';

const Student = () => {

  const  [data , setdata] = useState([])

  // ===== get data from firestore ========
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);

        // Fetch data after user is signed in
        getData('Student', uid)
          .then((res) => {
            console.log(res);
            data.push(res)
            setdata(data)
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // User is signed out
        // ...
      }
    });

  }, [])

  return (
    <>
    <div>
      <MenuAppBar />
    </div>
    </>
  )
}

export default Student;