
        let sec = 0;
        let second = 0;
        let min = 0;
        start = () => {
            let start = setInterval(() => {
                sec++
                document.getElementById('sec').innerHTML = sec;
                if(sec > 8){
                    sec = -1;
                }
                if(sec ===0){
                    document.getElementById('sec').innerHTML = '00';
                }
            },100);
            let start2 = setInterval(() => {
                second++
                document.getElementById('second').innerHTML = second + ' :';
                if(second > 58){
                    second =-1;
                }
                if(second===0){
                    document.getElementById('second').innerHTML = '00 :'
                }
                if(second===1){
                    document.getElementById('second').innerHTML = '01 :'
                }
                if(second===2){
                    document.getElementById('second').innerHTML = '02 :'
                }
                if(second===3){
                    document.getElementById('second').innerHTML = '03 :'
                }
                if(second===4){
                    document.getElementById('second').innerHTML = '04 :'
                }
                if(second===5){
                    document.getElementById('second').innerHTML = '05 :'
                }
                if(second===6){
                    document.getElementById('second').innerHTML = '06 :'
                }
                if(second===7){
                    document.getElementById('second').innerHTML = '07 :'
                }
                if(second===8){
                    document.getElementById('second').innerHTML = '08 :'
                }
                if(second===9){
                    document.getElementById('second').innerHTML = '09 :'
                }
            },1000);
            let start3 = setInterval(() => {
                min++
                document.getElementById('min').innerHTML = min + ' :';
                if(min===1){
                    document.getElementById('min').innerHTML = '01 :'
                }
                if(min===2){
                    document.getElementById('min').innerHTML = '02 :'
                }
                if(min===3){
                    document.getElementById('min').innerHTML = '03 :'
                }
                if(min===4){
                    document.getElementById('min').innerHTML = '04 :'
                }
                if(min===5){
                    document.getElementById('min').innerHTML = '05 :'
                }
                if(min===6){
                    document.getElementById('min').innerHTML = '06 :'
                }
                if(min===7){
                    document.getElementById('min').innerHTML = '07 :'
                }
                if(min===8){
                    document.getElementById('min').innerHTML = '08 :'
                }
                if(min===9){
                    document.getElementById('min').innerHTML = '09 :'
                }
            },60000);
            
        stop = () => {
            clearInterval(start);
            clearInterval(start2);
            clearInterval(start3);
        }
        begain = () => {
            clearInterval(start)
            clearInterval(start2);
            clearInterval(start3);
            document.getElementById('sec').innerHTML = '00';
            document.getElementById('second').innerHTML = '00 :';
            document.getElementById('min').innerHTML = '00 :';
            sec = 0;
            second = 0;
            min = 0;
        }
        }