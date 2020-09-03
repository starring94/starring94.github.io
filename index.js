function toggleMunkaim() {
    var vlist = document.getElementById('videos');
    if(vlist.classList.contains("v-hide")) {
        vlist.classList.remove("v-hide");
    } else {
        vlist.classList.add("v-hide");
    }
}