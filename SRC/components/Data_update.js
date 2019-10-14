import { fetch, console } from "react";



export default class Data_Update {
        
    // Checks if TBA_Servers are online
    fetchAndLog = async () => {
       response = await fetch('https://www.thebluealliance.com/api/v3/status', {
            method: 'POST',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                credentials: '5moc2mQHVZULRz5kVRJ5izYANiD6Jsws5DIGOV9xOvWHjBPiQfcBwWXzVSC88Y7l '
            }),
            body: JSON.stringify({
                current_season: '',
            }),
        });
        console.log(response);
    }
    
    
}

