import * as DeliveryService from "./DeliveryService.styles";

export default function DeliveryServiceUI() {
  return (
    <DeliveryService.Container>
      <DeliveryService.Wrapper>
        <DeliveryService.HeadText>
          <span>DELIVERY SERVICE</span>
          <h1>
            채식한상 레시피 그대로 <b>밀키트 정기구독</b>
          </h1>
        </DeliveryService.HeadText>
        <DeliveryService.Contents>
          <DeliveryService.ImageContainer>
            <DeliveryService.ImageWrapper>
              <img src="/img/deliveryService/img-deliveryService-01.png" />
              <img src="/img/deliveryService/img-deliveryService-02.png" />
            </DeliveryService.ImageWrapper>
          </DeliveryService.ImageContainer>
          <DeliveryService.ContentsText>
            <span></span>
            <span>채식한상 밀키트로</span>
            <span>가볍게 아침식사 해결하세요</span>
          </DeliveryService.ContentsText>
        </DeliveryService.Contents>
      </DeliveryService.Wrapper>
    </DeliveryService.Container>
  );
}
