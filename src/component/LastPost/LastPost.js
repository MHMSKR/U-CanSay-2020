import React, { Component } from 'react'
import {db} from "../../config/config";

export class LastPost extends Component {
    render() {
        db.collection("Post").get().then((querySnapshot) =>{
            querySnapshot.forEach(function(doc){
                console.log(doc.id,"=>",doc.data())
            });
        }).catch((err) =>{
            console.log("Error getting doc:", err)
        })
        return (
            <div>
                
            </div>
        )
    }
}

export default LastPost
