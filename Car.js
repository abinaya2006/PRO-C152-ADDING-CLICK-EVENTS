AFRAME.registerComponent("car", {
    schema: {
        model: { type: "string", default: "../car/scene.gltf" },
        clickCounter: { type: "number", default: 0 }
    },

    init: function () {
        this.el.setAttribute("gltf-model", this.data.model)
        position = { x: -1, y: 5, z: 12 };
        rotation = { x: 0, y: -100, z: 0 };
        scale = { x: 0.07, y: 0.07, z: 0.07 }
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale", scale);

    },

    update: function () {
        window.addEventListener("click", (e) => {
            this.data.clickCounter = this.data.clickCounter + 1
            if (this.data.clickCounter == 1) {
                const rotation = { x: 0, y: 20, z: 0 }
                this.el.setAttribute("rotation", rotation)
            }
            else if (this.data.clickCounter === 2) {

                const rotation = { x: 0, y: 100, z: 0 };
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 3) {

                const rotation = { x: 0, y: -200, z: 0 };
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter === 4) {

                const rotation = { x: 0, y: -100, z: 0 };

                this.el.setAttribute("rotation", rotation);
                this.data.clickCounter = 0;
            }
        })
    }
})