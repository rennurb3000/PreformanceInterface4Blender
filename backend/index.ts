import * as facemesh from '@tensorflow-models/facemesh';

async function main(){
    const model = await facemesh.load();
    const predictions = await model.estimateFaces(document.querySelector("video"));

}