module.exports = cds.service.impl(async function () {
    debugger
    console.log("debugger");
    var BPA = await cds.connect.to('crossbpadest');
    console.log("bpa", BPA)
    // try {
    //     var bodyy = JSON.parse(JSON.stringify(
    //         {
    //             "definitionId": "us10.2ed753fbtrial.task.process",
    //             "context": {
    //                 "active": true
    //             }
    //         }
    //     ));
    //     console.log(bodyy);
    //     var getc = await BPA.get("/workflow/rest/v1/workflow-instances");
    //     console.log("get11", getc);
    //     let response11
    //     try {
    //         response11 = await BPA.post("/workflow/rest/v1/workflow-instances", bodyy);
    //         console.log("testetst")
    //     } catch (error) {
    //         console.log("Dest error", error)
    //     }
    //     console.log("response11", response11)

    // } 
    // catch (error) {
        
    // }


})