//2)
class Mario extends GameObject{

    //2-3)
    hitCheck(){
          //벽돌 수만큼 반복하며 마리오와 각각의 벽돌 간 충돌 체크
          for(let i=0; i<brickArray.length; i++){

            let result=collisionCheck(this, brickArray[i]);
            //console.log(result);

            if(result){ //반복문의 i번째 벽돌과 마주쳤다면
                //마주친 벽돌의 y축에서 마리오의 키(height)만큼 위로 올리자(-)
                this.y=brickArray[i].y-this.height;
            }
        }
    }

    //2-2)
    //부모인 게임오브젝트에게 물려받은 재산 중 tick() 메서드는 마리오에 맞지 않음
    //이 때 개발자는 부모에게 물려받은 메서드를 자기만의 코드로 업그레이드 할 수 있는데,
    //이러한 메서드 정의 기법을 가리켜 오버라이딩(Overriding)
    tick(){
        this.velY+=g;
        //console.log(this.velY);
        
        if(this.velY>8){
            this.velY=8;
        }

            
        this.x += this.velX;
        this.y += this.velY;

        this.hitCheck();
    }
}