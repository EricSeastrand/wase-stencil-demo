
/*
    This function just loads some mock data from fakeJSON.com
    In a real app, it might load actual data from a real API
    More info: https://fakejson.com/documentation
*/

export async function loadPeople() {
    let payload = {
        token: "E_yAsAe8YlZYfmta5GnzVw",
        parameters: {
          delay: 2
        },
        data: {
          name: "nameFirst",
          email: "internetEmail",
          phone: "phoneHome",
          _repeat: 30
        }
    };
    console.log("Starting to load AJAX data");
    
    const apiResponse = await fetch("https://app.fakejson.com/q", {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    const json = await apiResponse.json();
    
    return json;
}