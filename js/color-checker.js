function updateDemoColors(colorFront, colorBack) {
    const demo = document.querySelector("#sample-text");
    demo.style.color = `rgb(${colorFront.toString()})`;
    demo.style.backgroundColor = `rgb(${colorBack.toString()})`;
  }
  
  /* the following functions are adapted from https://stackoverflow.com/a/9733420/3695983 */
  function luminanace(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
        ? v / 12.92
      : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  function contrast(rgb1, rgb2) {
    const luminanceFront = luminanace(rgb1[0], rgb1[1], rgb1[2]);
    const luminanceBack  = luminanace(rgb2[0], rgb2[1], rgb2[2]);
    return luminanceBack > luminanceFront 
      ? ((luminanceFront + 0.05) / (luminanceBack + 0.05))
      : ((luminanceBack + 0.05) / (luminanceFront + 0.05));
  }
  
  function updateBoxesColors(colorFront, colorBack) {
    const ratio = contrast(colorFront, colorBack);
    document.querySelector("#aa-normal").className  = ratio < 0.22222 ? "" : "fail";
    document.querySelector("#aa-large").className   = ratio < 0.33333 ? "" : "fail";
    document.querySelector("#aaa-normal").className = ratio < 0.14285 ? "" : "fail";
    document.querySelector("#aaa-large").className  = ratio < 0.22222 ? "" : "fail";
    
    const totalWrong = document.querySelectorAll(".fail").length;
    let Kraut_1 = document.querySelector("#Kraut_1");
    let Kraut_2 = document.querySelector("#Kraut_2");
    let Kraut_3 = document.querySelector("#Kraut_3");
    let Kraut_4 = document.querySelector("#Kraut_4");
    let Alis_Kiri = document.querySelector("#Alis_Kiri");
    let Alis_Kanan = document.querySelector("#Alis_Kanan");
    let Mata_Kiri_1 = document.querySelector("#Mata_Kiri_1");
    let Mata_Kiri_2 = document.querySelector("#Mata_Kiri_2");
    let Mata_Kiri_3 = document.querySelector("#Mata_Kiri_3");
    let Mata_Kiri_4 = document.querySelector("#Mata_Kiri_4");
    let Mata_Kiri_5 = document.querySelector("#Mata_Kiri_5");
    let Mata_Kiri_6 = document.querySelector("#Mata_Kiri_6");
    let Mata_Kiri_7 = document.querySelector("#Mata_Kiri_7");
    let Mata_Kiri_8 = document.querySelector("#Mata_Kiri_8");
    let Mata_Kanan_1 = document.querySelector("#Mata_Kanan_1");
    let Mata_Kanan_2 = document.querySelector("#Mata_Kanan_2");
    let Mata_Kanan_3 = document.querySelector("#Mata_Kanan_3");
    let Mata_Kanan_4 = document.querySelector("#Mata_Kanan_4");
    let Mata_Kanan_5 = document.querySelector("#Mata_Kanan_5");
    let Mata_Kanan_6 = document.querySelector("#Mata_Kanan_6");
    let Mata_Kanan_7 = document.querySelector("#Mata_Kanan_7");
    let Mata_Kanan_8 = document.querySelector("#Mata_Kanan_8");
    let Mulut_1 = document.querySelector("#Mulut_1");
    let Mulut_2 = document.querySelector("#Mulut_2");
    let Mulut_3 = document.querySelector("#Mulut_3");
    let Mulut_4 = document.querySelector("#Mulut_4");
    let Mulut_5 = document.querySelector("#Mulut_5");
    let Mulut_6 = document.querySelector("#Mulut_6");
    let Mulut_7 = document.querySelector("#Mulut_7");
    switch(totalWrong) {
      case 0:
        Kraut_1.setAttribute("class", "st34");
        Kraut_2.setAttribute("class", "st34");
        Kraut_3.setAttribute("class", "st27");
        Kraut_4.setAttribute("class", "st27");

        Alis_Kiri.setAttribute("d", "M104.6,70.5c5.7-1.3,8.2-1.3,7.9,1.8c-0.3,3.1-5,3.7-9.1,4.5s-12.2,2.5-16.5,6.4c0,0,0.8-6.1,5.1-8.5C96.3,72.3,104.6,70.5,104.6,70.5z");
        Alis_Kanan.setAttribute("d", "M145.4,70.5c-5.7-1.3-8.2-1.3-7.9,1.8c0.3,3.1,5,3.7,9.1,4.5s12.2,2.5,16.5,6.4c0,0-0.8-6.1-5.1-8.5S145.4,70.5,145.4,70.5z");
        
        Mata_Kanan_1.setAttribute("d", "M158.2,91c0,0,1-8.5-10.5-8.8s-10.9,10.9-10.9,10.9s3.4-7,11.2-6.8C155.9,86.5,158.2,91,158.2,91z");
        Mata_Kanan_2.setAttribute("d", "M137.2,93.7c0-1.8,2.5-6.2,9.8-6.4c8.6-0.3,11.2,4,11.2,4s-1,6.6-9,7.5C140.9,99.5,137.2,93.7,137.2,93.7z");
        Mata_Kanan_3.setAttribute("d", "M153.1,92.6c0.1-3.2-2.4-5.8-5.6-5.9c-3.2-0.1-5.8,2.4-5.9,5.6c-0.1,3.2,2.4,5.8,5.6,5.9C150.4,98.3,153,95.8,153.1,92.6z");
        Mata_Kanan_4.setAttribute("d", "M144.5,92.4c0-1.6,1.3-2.8,2.9-2.7c1.6,0,2.8,1.3,2.7,2.9c0,1.6-1.3,2.8-2.9,2.7C145.7,95.2,144.5,93.9,144.5,92.4z");
        Mata_Kanan_5.setAttribute("d", "M137.1,93.7c0.3,0,0.7-2.8,4.3-4.8c3.2-1.8,7.8-2,11.4-0.7c3,1.1,4.4,2.6,5,3.3c0.6,0.7,1.4-0.3-0.2-2.3c-1.9-2.3-4.6-3.7-9.6-3.8c-5.3-0.2-8.4,2.4-9.6,4C136.6,91.9,136.5,93.7,137.1,93.7z");
        Mata_Kanan_6.setAttribute("d", "M148.2,90.7c0-0.8,0.7-1.4,1.4-1.3c0.8,0,1.4,0.7,1.3,1.4c0,0.8-0.7,1.4-1.4,1.3S148.2,91.5,148.2,90.7z");
        Mata_Kanan_7.setAttribute("class", "st31");
        Mata_Kanan_7.setAttribute("d", "M144,93c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6S144,93.3,144,93z");
        Mata_Kanan_8.setAttribute("class", "st31");
        Mata_Kanan_8.setAttribute("d", "M148.9,93.9c0.1-0.5,0.5-0.8,1-0.7c0.5,0.1,0.8,0.5,0.7,1s-0.5,0.8-1,0.7C149.1,94.9,148.8,94.4,148.9,93.9z");
        
        Mata_Kiri_1.setAttribute("d", "M91.8,91c0,0-1-8.5,10.5-8.8s10.9,10.9,10.9,10.9s-3.4-7-11.2-6.8C94.1,86.5,91.8,91,91.8,91z");
        Mata_Kiri_2.setAttribute("d", "M112.8,93.7c0-1.8-2.5-6.2-9.8-6.4c-8.6-0.3-11.2,4-11.2,4s1,6.6,9,7.5C109.1,99.5,112.8,93.7,112.8,93.7z");
        Mata_Kiri_3.setAttribute("d", "M96.9,92.6c-0.1-3.2,2.4-5.8,5.6-5.9s5.8,2.4,5.9,5.6s-2.4,5.8-5.6,5.9C99.6,98.3,97,95.8,96.9,92.6z");
        Mata_Kiri_4.setAttribute("d", "M105.5,92.4c0-1.6-1.3-2.8-2.9-2.7c-1.6,0-2.8,1.3-2.7,2.9c0,1.6,1.3,2.8,2.9,2.7C104.3,95.2,105.5,93.9,105.5,92.4z");
        Mata_Kiri_5.setAttribute("d", "M112.9,93.7c-0.3,0-0.7-2.8-4.3-4.8c-3.2-1.8-7.8-2-11.4-0.7c-3,1.1-4.4,2.6-5,3.3c-0.6,0.7-1.4-0.3,0.2-2.3c1.9-2.3,4.6-3.7,9.6-3.8c5.3-0.2,8.4,2.4,9.6,4C113.4,91.9,113.5,93.7,112.9,93.7z");
        Mata_Kiri_6.setAttribute("d", "M101.8,90.7c0-0.8-0.7-1.4-1.4-1.3c-0.8,0-1.4,0.7-1.3,1.4c0,0.8,0.7,1.4,1.4,1.3S101.8,91.5,101.8,90.7z");
        Mata_Kiri_7.setAttribute("class", "st31");
        Mata_Kiri_7.setAttribute("d", "M106,93c0-0.4-0.3-0.6-0.6-0.6c-0.4,0-0.6,0.3-0.6,0.6c0,0.4,0.3,0.6,0.6,0.6S106,93.3,106,93z");
        Mata_Kiri_8.setAttribute("class", "st31");
        Mata_Kiri_8.setAttribute("d", "M101.1,93.9c-0.1-0.5-0.5-0.8-1-0.7c-0.5,0.1-0.8,0.5-0.7,1c0.1,0.5,0.5,0.8,1,0.7C100.9,94.9,101.2,94.4,101.1,93.9z");
        
        Mulut_1.setAttribute("d", "M125,144.3c0.9,0,2.2-0.1,3.9-0.9c1.7-0.8,4.7-2.5,4-2.2s-5.2,1.5-7.9,1.5c-2.7,0-7.2-1.1-7.9-1.5c-0.7-0.3,2.3,1.4,4,2.2C122.8,144.2,124.1,144.3,125,144.3z");
        Mulut_2.setAttribute("class", "st10");
        Mulut_2.setAttribute("d", "M125.1,131c-3,0-15.3-0.5-15.3-0.5s1.8,7.5,15.3,7.5c13.4,0,15.3-7.4,15.3-7.4L125.1,131z");
        Mulut_3.setAttribute("class", "st34");
        Mulut_4.setAttribute("class", "st34");
        Mulut_5.setAttribute("class", "st31");
        Mulut_5.setAttribute("d", "M125.1,131c-3,0-12.3-0.5-12.3-0.5s3.3,3.2,12.5,3.2c9.1,0,12.1-3.2,12.1-3.2L125.1,131z");
        Mulut_6.setAttribute("d", "M142.5,129.4c-0.3-0.1-2.1,0.5-3.6,0.4c-2.5-0.2-5.6-0.9-7.4-1c-3.1-0.2-5.1,1-6.5,1s-3.3-1.2-6.5-1c-1.8,0.1-4.9,0.8-7.4,1c-1.5,0.1-3.3-0.4-3.6-0.4c-0.5,0.1,0.4,2.9,17.5,2.9C142.1,132.3,142.9,129.5,142.5,129.4z");
        Mulut_7.setAttribute("class", "st30");
        Mulut_7.setAttribute("d", "M125,131c-6.4,0-16.8-0.7-16.8-0.7s1.9,12.3,16.8,12.3s16.8-12.3,16.8-12.3S131.4,131,125,131z");
        break;
      case 1:
      case 2:
        Kraut_1.setAttribute("class", "st34");
        Kraut_2.setAttribute("class", "st34");
        Kraut_3.setAttribute("class", "st34");
        Kraut_4.setAttribute("class", "st34")
        
        Alis_Kiri.setAttribute("d", "M107.3,74.8c5.8,0.5,7.6-1.4,9.6-0.8c1.7,0.6,1.8,3.2-0.7,5.3c-2.7,2.3-8,1.1-12.1,0.6c-4.1-0.4-12.4-1.2-17.6,1.2c0,0,2.6-5.6,7.4-6.6C98.7,73.6,107.3,74.8,107.3,74.8z");
        Alis_Kanan.setAttribute("d", "M142.7,74.8c-5.8,0.5-7.6-1.4-9.6-0.8c-1.7,0.6-1.8,3.2,0.7,5.3c2.7,2.3,8,1.1,12.1,0.6c4.1-0.4,12.4-1.2,17.6,1.2c0,0-2.6-5.6-7.4-6.6C151.3,73.6,142.7,74.8,142.7,74.8z");
        
        Mata_Kanan_1.setAttribute("d", "M158.2,90.1c0,0,0.2-8.6-11.3-7.8c-11.5,0.8-9.8,11.8-9.8,11.9c0,0,2.7-7.3,10.6-7.8C155.5,85.9,158.2,90.1,158.2,90.1z");
        Mata_Kanan_2.setAttribute("d", "M137.5,94.7c-0.1-1.8,1.9-6.4,9.2-7.3c8.5-1.1,11.5,2.9,11.5,2.9s-0.4,6.7-8.2,8.2C141.8,100.2,137.5,94.7,137.5,94.7z");
        Mata_Kanan_3.setAttribute("d", "M153.3,92.2c-0.2-3.2-2.9-5.6-6.1-5.4c-3.2,0.2-5.6,2.9-5.4,6.1c0.2,3.2,2.9,5.6,6.1,5.4C151.1,98.1,153.5,95.4,153.3,92.2z");
        Mata_Kanan_4.setAttribute("d", "M144.7,92.7c-0.1-1.6,1.1-2.9,2.6-3s2.9,1.1,3,2.6c0.1,1.6-1.1,2.9-2.6,3C146.2,95.5,144.8,94.3,144.7,92.7z");
        Mata_Kanan_5.setAttribute("d", "M137.4,94.8c0.3,0,0.5-2.8,3.9-5.1c3-2.1,7.5-2.7,11.3-1.7c3.1,0.8,4.6,2.2,5.2,2.8c0.6,0.6,1.4-0.4-0.4-2.2c-2.1-2.1-4.9-3.2-9.9-2.9c-5.3,0.3-8.1,3.1-9.2,4.8C136.8,93,136.8,94.8,137.4,94.8z");
        Mata_Kanan_6.setAttribute("d", "M148.3,90.8c-0.1-0.8,0.5-1.4,1.3-1.5s1.4,0.5,1.5,1.3s-0.5,1.4-1.3,1.5C149,92.1,148.3,91.5,148.3,90.8z");
        Mata_Kanan_7.setAttribute("class", "st31");
        Mata_Kanan_7.setAttribute("d", "M144.9,94.3c0-0.4,0.2-0.7,0.6-0.7c0.4,0,0.7,0.2,0.7,0.6s-0.2,0.7-0.6,0.7S144.9,94.6,144.9,94.3z");
        Mata_Kanan_8.setAttribute("class", "st34");
        
        Mata_Kiri_1.setAttribute("d", "M91.8,90.1c0,0-0.2-8.6,11.3-7.8c11.5,0.8,9.8,11.8,9.8,11.9c0,0-2.7-7.3-10.6-7.8C94.5,85.9,91.8,90.1,91.8,90.1z");
        Mata_Kiri_2.setAttribute("d", "M112.5,94.7c0.1-1.8-1.9-6.4-9.2-7.3c-8.5-1.1-11.5,2.9-11.5,2.9s0.4,6.7,8.2,8.2C108.2,100.2,112.5,94.7,112.5,94.7z");
        Mata_Kiri_3.setAttribute("d", "M96.7,92.2c0.2-3.2,2.9-5.6,6.1-5.4s5.6,2.9,5.4,6.1s-2.9,5.6-6.1,5.4S96.5,95.4,96.7,92.2z");
        Mata_Kiri_4.setAttribute("d", "M105.3,92.7c0.1-1.6-1.1-2.9-2.6-3s-2.9,1.1-3,2.6c-0.1,1.6,1.1,2.9,2.6,3C103.8,95.5,105.2,94.3,105.3,92.7z");
        Mata_Kiri_5.setAttribute("d", "M112.6,94.8c-0.3,0-0.5-2.8-3.9-5.1c-3-2.1-7.5-2.7-11.3-1.7c-3.1,0.8-4.6,2.2-5.2,2.8c-0.6,0.6-1.4-0.4,0.4-2.2c2.1-2.1,4.9-3.2,9.9-2.9c5.3,0.3,8.1,3.1,9.2,4.8C113.2,93,113.2,94.8,112.6,94.8z");
        Mata_Kiri_6.setAttribute("d", "M101.7,90.8c0.1-0.8-0.5-1.4-1.3-1.5s-1.4,0.5-1.5,1.3s0.5,1.4,1.3,1.5C101,92.1,101.7,91.5,101.7,90.8z");
        Mata_Kiri_7.setAttribute("class", "st31");
        Mata_Kiri_7.setAttribute("d", "M105.1,94.3c0-0.4-0.2-0.7-0.6-0.7s-0.7,0.2-0.7,0.6s0.2,0.7,0.6,0.7S105.1,94.6,105.1,94.3z");
        Mata_Kiri_8.setAttribute("class", "st34");
        
        Mulut_1.setAttribute("d", "M125,143c0.8,0,1.8-0.1,3.2-0.8s3.9-1.9,3.3-1.6c-0.6,0.3-4.3,1-6.5,1s-5.9-0.7-6.5-1s1.9,0.9,3.3,1.6C123.2,142.8,124.2,143,125,143z");
        Mulut_2.setAttribute("class", "st34");
        Mulut_3.setAttribute("class", "st34");
        Mulut_4.setAttribute("class", "st30");
        Mulut_4.setAttribute("d", "M125,133.6c-5.3,0-12.1,1.3-12.1,1.3s-0.2,6.6,12.1,6.6s12.1-6.6,12.1-6.6S130.3,133.6,125,133.6z");
        Mulut_5.setAttribute("class", "st34");
        Mulut_6.setAttribute("d", "M130.3,131.7c-2.6-0.2-4.2,0.8-5.3,0.8c-1.1,0-2.8-1-5.3-0.8c-2.4,0.2-10.1,3.6-8.9,4.3c1.1,0.8,4.1-2.1,14.3-1.8c10.2-0.2,13.1,2.6,14.3,1.8C140.4,135.3,132.8,131.9,130.3,131.7z");
        Mulut_7.setAttribute("class", "st34");
        break;
      case 3:
        Kraut_1.setAttribute("class", "st34");
        Kraut_2.setAttribute("class", "st34");
        Kraut_3.setAttribute("class", "st34");
        Kraut_4.setAttribute("class", "st34");
        
        Alis_Kiri.setAttribute("d", "M104.9,68.3c3.1-0.7,5.7-2.8,7-2.5c1.1,0.3,1.3,2.1,0.6,3.8c-1.1,2.9-5,3.7-9.1,4.5s-12.2,2.5-16.5,6.4c0,0,0.8-6.1,5.1-8.5C96.3,69.7,104.9,68.3,104.9,68.3z");
        Alis_Kanan.setAttribute("d", "M145.1,68.3c-3.1-0.7-5.7-2.8-7-2.5c-1.1,0.3-1.3,2.1-0.6,3.8c1.1,2.9,5,3.7,9.1,4.5s12.2,2.5,16.5,6.4c0,0-0.8-6.1-5.1-8.5C153.7,69.7,145.1,68.3,145.1,68.3z");
        
        Mata_Kanan_1.setAttribute("d", "M158.2,90.7c0,0-0.8-9.7-10.8-9.1c-11.5,0.6-10.6,11.7-10.6,11.8c0,0,3.2-7.1,11-7.1C155.7,86.3,158.2,90.7,158.2,90.7z");
        Mata_Kanan_2.setAttribute("d", "M137.3,93.9c0-1.8,2.2-8.1,9.5-8.5c8.6-0.5,11.4,5.5,11.4,5.5s-0.8,6.7-8.7,7.7C141.2,99.7,137.3,93.9,137.3,93.9z");
        Mata_Kanan_3.setAttribute("d", "M140.9,92.5c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8C143.5,98.3,140.9,95.7,140.9,92.5z");
        Mata_Kanan_4.setAttribute("d", "M150.1,92.5c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4C148.6,96,150.1,94.4,150.1,92.5z");
        Mata_Kanan_5.setAttribute("d", "M137.2,94c0.3,0,1-4,4.2-6.5c2.8-2.1,7.2-2.4,10.8-0.9c2.9,1.3,5.1,3.9,5.6,4.6c0.6,0.7,1.1-0.5-0.2-2.3c-1.8-2.4-4.9-5.2-9.9-5.2c-5.3,0-8.1,3.2-9.3,4.9C136.6,91.3,136.6,94,137.2,94z");
        Mata_Kanan_6.setAttribute("d", "M146.5,90.5c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4S146.5,91.3,146.5,90.5z");
        Mata_Kanan_7.setAttribute("class", "st34");
        Mata_Kanan_8.setAttribute("class", "st34");
        
        Mata_Kiri_1.setAttribute("d", "M91.8,90.7c0,0,0.8-9.7,10.8-9.1c11.5,0.6,10.6,11.7,10.6,11.8c0,0-3.2-7.1-11-7.1C94.3,86.3,91.8,90.7,91.8,90.7z");
        Mata_Kiri_2.setAttribute("d", "M112.7,93.9c0-1.8-2.2-8.1-9.5-8.5c-8.6-0.5-11.4,5.5-11.4,5.5s0.8,6.7,8.7,7.7C108.8,99.7,112.7,93.9,112.7,93.9z");
        Mata_Kiri_3.setAttribute("d", "M96.8,92.2c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8c0,3.2-2.6,5.8-5.8,5.8S96.8,95.4,96.8,92.2z");
        Mata_Kiri_4.setAttribute("d", "M106,92.2c0-1.9-1.5-3.4-3.4-3.4s-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4C104.5,95.7,106,94.1,106,92.2z");
        Mata_Kiri_5.setAttribute("d", "M112.8,94c-0.3,0-1-4-4.2-6.5c-2.8-2.1-7.2-2.4-10.8-0.9c-2.9,1.3-5.1,3.9-5.6,4.6c-0.6,0.7-1.1-0.5,0.2-2.3c1.8-2.4,4.9-5.2,9.9-5.2c5.3,0,8.1,3.2,9.3,4.9C113.4,91.3,113.4,94,112.8,94z");
        Mata_Kiri_6.setAttribute("d", "M103.5,90.5c0-0.8-0.6-1.4-1.4-1.4s-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4S103.5,91.3,103.5,90.5z");
        Mata_Kiri_7.setAttribute("class", "st34");
        Mata_Kiri_8.setAttribute("class", "st34");

        Mulut_1.setAttribute("d", "M125,141.5c-2.2,0-7.1-1.1-6.7-0.7c0.5,0.4,1.6,1,3.2,1.5c1.5,0.5,2.7,0.6,3.4,0.6l0,0l0,0l0,0l0,0c0.8,0,2-0.1,3.4-0.6c1.6-0.5,2.7-1.1,3.2-1.5C132.2,140.4,127.3,141.5,125,141.5z");
        Mulut_2.setAttribute("class", "st10");
        Mulut_2.setAttribute("d", "M125,131c-4.5,0-10.9,1.6-12.9,3.4c0,0,2.5,3.3,12.9,3.3c10.5,0,12.7-3.3,12.7-3.3S130.7,131,125,131z");
        Mulut_3.setAttribute("class", "st29");
        Mulut_3.setAttribute("d", "M125,135.5c-5.4,0-8,1.4-8,1.4l8,1.7l8-1.7C133,136.9,130.4,135.5,125,135.5z");
        Mulut_4.setAttribute("class", "st30");
        Mulut_4.setAttribute("d", "M125,137c-4.9-0.7-8.2-2.5-13.9-2.2c0,0,1.6,6.6,13.9,6.6s13.9-6.6,13.9-6.6C133.2,134.5,129.9,136.3,125,137z");
        Mulut_5.setAttribute("class", "st31");
        Mulut_5.setAttribute("d", "M115.4,133.6c0,0,5.4-0.4,9.6-0.4c4.3,0,9.6,0.4,9.6,0.4s-1.9-3.2-9.6-3.2S115.4,133.6,115.4,133.6z");
        Mulut_6.setAttribute("d", "M130.3,129.3c-2.6-0.2-4.2,0.8-5.3,0.8c-1.1,0-2.8-1-5.3-0.8c-2.4,0.2-10.1,5.3-8.9,6.1c1.1,0.8,6.5-3.6,14.3-3.6s13.1,4.4,14.3,3.6C140.4,134.7,132.8,129.5,130.3,129.3z");
        Mulut_7.setAttribute("class", "st34");
        break;
      case 4: 
        Kraut_1.setAttribute("class", "st3");
        Kraut_2.setAttribute("class", "st3");
        Kraut_3.setAttribute("class", "st27");
        Kraut_4.setAttribute("class", "st27");

        Alis_Kiri.setAttribute("d", "M110.3,78.3c4.3,1.7,7.3,0.3,7.8,1.4c0.5,1.2,0.2,3.7-2.1,4.7c-3.6,1.6-8.1-0.7-11.9-2.4c-3.8-1.7-9.8-7.7-16.7-6.4c0,0,4.6-4.4,10.7-3.1C102.8,73.5,105.9,76.6,110.3,78.3z");
        Alis_Kanan.setAttribute("d", "M139.7,78.3c-4.3,1.7-7.3,0.3-7.8,1.4c-0.5,1.2-0.2,3.7,2.1,4.7c3.6,1.6,8.1-0.7,11.9-2.4c3.8-1.7,9.8-7.7,16.7-6.4c0,0-4.6-4.4-10.7-3.1C147.2,73.5,144.1,76.6,139.7,78.3z");
        
        Mata_Kanan_1.setAttribute("d", "M157.8,89.6c0,0-0.5-9.2-11.9-7.6S137,94.6,137,94.6s2.1-7.5,9.9-8.6C154.8,84.9,157.8,89.6,157.8,89.6z");
        Mata_Kanan_2.setAttribute("d", "M137.6,95.1c-0.3-1.7,1.4-6.5,8.6-8c8.4-1.7,11.6,3.3,11.6,3.3s0.3,5.9-7.5,8C142.2,100.7,137.6,95.1,137.6,95.1z");
        Mata_Kanan_3.setAttribute("d", "M152.2,91.7c-0.5-3.1-3.4-5.3-6.5-4.9s-5.3,3.4-4.9,6.5c0.5,3.1,3.4,5.3,6.5,4.9C150.5,97.8,152.7,94.8,152.2,91.7z");
        Mata_Kanan_4.setAttribute("d", "M143.7,92.9c-0.2-1.5,0.8-3,2.4-3.2c1.5-0.2,3,0.8,3.2,2.4c0.2,1.5-0.8,3-2.4,3.2C145.4,95.5,144,94.5,143.7,92.9z");
        Mata_Kanan_5.setAttribute("d", "M137.5,95.2c0.3,0,0.3-2.9,3.5-5.4c2.9-2.3,8-3.1,11.3-2.4c2.5,0.6,4.6,2.3,5.3,2.8c0.7,0.6,0.6-1.3-1.3-2.9c-2.2-2-6.3-2.6-10.2-1.9c-5.2,1-6.9,3.6-7.8,5.3C136.7,93.5,136.9,95.2,137.5,95.2z");
        Mata_Kanan_6.setAttribute("d", "M147.1,90.7c-0.1-0.8,0.4-1.5,1.2-1.6s1.5,0.4,1.6,1.2c0.1,0.8-0.4,1.5-1.2,1.6C147.9,92,147.2,91.4,147.1,90.7z");
        Mata_Kanan_7.setAttribute("class", "st34");
        Mata_Kanan_8.setAttribute("class", "st34");
        
        Mata_Kiri_1.setAttribute("d", "M92.2,89.6c0,0,0.5-9.2,11.9-7.6s8.9,12.6,8.9,12.6s-2.1-7.5-9.9-8.6C95.2,84.9,92.2,89.6,92.2,89.6z");
        Mata_Kiri_2.setAttribute("d", "M112.4,95.1c0.3-1.7-1.4-6.5-8.6-8c-8.4-1.7-11.6,3.3-11.6,3.3s-0.3,5.9,7.5,8C107.8,100.7,112.4,95.1,112.4,95.1z");
        Mata_Kiri_3.setAttribute("d", "M97.8,91.7c0.5-3.1,3.4-5.3,6.5-4.9s5.3,3.4,4.9,6.5c-0.5,3.1-3.4,5.3-6.5,4.9C99.5,97.8,97.3,94.8,97.8,91.7z");
        Mata_Kiri_4.setAttribute("d", "M106.3,92.9c0.2-1.5-0.8-3-2.4-3.2c-1.5-0.2-3,0.8-3.2,2.4c-0.2,1.5,0.8,3,2.4,3.2C104.6,95.5,106,94.5,106.3,92.9z");
        Mata_Kiri_5.setAttribute("d", "M112.5,95.2c-0.3,0-0.3-2.9-3.5-5.4c-2.9-2.3-8-3.1-11.3-2.4c-2.5,0.6-4.6,2.3-5.3,2.8c-0.7,0.6-0.6-1.3,1.3-2.9c2.2-2,6.3-2.6,10.2-1.9c5.2,1,6.9,3.6,7.8,5.3C113.3,93.5,113.1,95.2,112.5,95.2z");
        Mata_Kiri_6.setAttribute("d", "M102.9,90.7c0.1-0.8-0.4-1.5-1.2-1.6c-0.8-0.1-1.5,0.4-1.6,1.2c-0.1,0.8,0.4,1.5,1.2,1.6C102.1,92,102.8,91.4,102.9,90.7z");
        Mata_Kiri_7.setAttribute("class", "st34");
        Mata_Kiri_8.setAttribute("class", "st34");
        
        Mulut_1.setAttribute("d", "M125,143.6c-2.5,0-7.9-1.2-7.3-0.8c0.6,0.5,1.7,1.1,3.5,1.6c1.6,0.5,2.9,0.6,3.8,0.7l0,0l0,0l0,0l0,0c0.9,0,2.2-0.1,3.8-0.7c1.8-0.6,2.9-1.2,3.5-1.6C132.9,142.4,127.5,143.6,125,143.6z");
        Mulut_2.setAttribute("class", "st10");
        Mulut_2.setAttribute("d", "M125,131.3c-5,0-13.1,3.1-15.3,5c0,0,3.8,4,15.3,4s15.3-4,15.3-4S131.3,131.3,125,131.3z");
        Mulut_3.setAttribute("class", "st29");
        Mulut_3.setAttribute("d", "M125,136.2c-5.9,0-8.8,1.5-8.8,1.5l8.8,1.8l8.8-1.8C133.8,137.7,130.9,136.2,125,136.2z");
        Mulut_4.setAttribute("class", "st30");
        Mulut_4.setAttribute("d", "M125,138.7c-5.4-0.8-9-2.8-15.3-2.4c0,0,1.8,7.3,15.3,7.3s15.3-7.3,15.3-7.3C134,135.9,130.4,137.9,125,138.7z");
        Mulut_5.setAttribute("class", "st31");
        Mulut_5.setAttribute("d", "M114.4,134.1c0,0,5.9-0.5,10.6-0.5s10.6,0.5,10.6,0.5s-2.1-3.6-10.6-3.6C116.5,130.6,114.4,134.1,114.4,134.1z");
        Mulut_6.setAttribute("d", "M130.9,128.6c-2.8-0.2-4.6,0.9-5.9,0.9c-1.2,0-3-1.1-5.9-0.9c-2.7,0.2-11.1,6.8-9.8,7.6c1.3,0.9,7.2-4,15.7-4s14.4,4.8,15.7,4C142,135.3,133.5,128.8,130.9,128.6z");
        Mulut_7.setAttribute("class", "st34");
        break;
    }
  }
  
  function updateHex(colorFront, colorBack) {
    const colorFrontHex = colorFront.map(function(el) { return Number(el).toString(16).padStart(2, "0").toUpperCase(); });
    const colorBackHex = colorBack.map(function(el) { return Number(el).toString(16).padStart(2, "0").toUpperCase(); });
    document.querySelector("#color-1-hex").value = `#${colorFrontHex.join('')}`;
    document.querySelector("#color-2-hex").value = `#${colorBackHex.join('')}`
  }
  
  function updateColors() {
    const colorFront = [ 
      document.querySelector("#color-1-r").value,
      document.querySelector("#color-1-g").value,
      document.querySelector("#color-1-b").value
    ];
    const colorBack = [
      document.querySelector("#color-2-r").value,
      document.querySelector("#color-2-g").value,
      document.querySelector("#color-2-b").value
    ];
  
    updateDemoColors(colorFront, colorBack);
    updateBoxesColors(colorFront, colorBack);
    updateHex(colorFront, colorBack);
  }
  
  document.querySelectorAll("input[type='number'], input[type='range']").forEach(function(el) {
    el.addEventListener("input", function() {
      if (this.type === "range") {
        this.nextElementSibling.value = this.value;
      } else if (this.type === "number") {
        this.previousElementSibling.value = this.value;
      }
      updateColors();
    });
  });
  
  document.querySelectorAll("input[type='text']").forEach(function(el) {
    el.addEventListener("blur", function() {
      let val = this.value;
      let wrongValue = false;
      if (val[0] === "#") val = val.substring(1);
      if (val.length === 3 || val.length === 6) {
        if (val.length === 3) {
          val = `${val[0]}${val[0]}${val[1]}${val[1]}${val[2]}${val[2]}`;
        }
        if (val.match(/[0-9A-Fa-f]{6}/)) {
          const red = parseInt(`${val[0]}${val[1]}`, 16);
          const green = parseInt(`${val[2]}${val[3]}`, 16);
          const blue = parseInt(`${val[4]}${val[5]}`, 16);
          const target = this.dataset.target;
          
          document.getElementById(`number-${target}-r`).value = red;
          document.getElementById(`number-${target}-g`).value = green;
          document.getElementById(`number-${target}-b`).value = blue;
          document.getElementById(`color-${target}-r`).value = red;
          document.getElementById(`color-${target}-g`).value = green;
          document.getElementById(`color-${target}-b`).value = blue;
          
          updateColors();
        } else {
          wrongValue = true;
        }
      } else {
        wrongValue = true;
      }
      
      if (wrongValue){
        const colorFront = [ 
          document.querySelector("#color-1-r").value,
          document.querySelector("#color-1-g").value,
          document.querySelector("#color-1-b").value
        ];
        const colorBack = [
          document.querySelector("#color-2-r").value,
          document.querySelector("#color-2-g").value,
          document.querySelector("#color-2-b").value
        ];
        updateHex(colorFront, colorBack)
      }
    });
  })
