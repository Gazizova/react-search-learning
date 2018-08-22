import React, { PureComponent } from 'react';
import './App.css';


function sortByName(cnt, array){
    let newArray =array.slice();
    let sortByFirstName = newArray.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (cnt===0) {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }else if(cnt === 1){
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        }
    });
    return sortByFirstName
    console.log("sortByFirstName")
    console.log(sortByFirstName)
}
export default sortByName