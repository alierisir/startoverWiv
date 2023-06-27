 import {IfcViewerAPI} from "web-ifc-viewer"
 import {Color} from "three"

 const container = document.getElementById("viewer-container")
 const viewer = new IfcViewerAPI({container, backgroundColor: new Color(0xffffff)})
 viewer.axes.setAxes()
 viewer.grid.setGrid()
 viewer.IFC.loadIfcUrl('./samples/02.ifc')
 

