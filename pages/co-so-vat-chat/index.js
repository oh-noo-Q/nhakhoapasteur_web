import React from "react";
import Head from "next/head";
import {
  Container,
  Text,
  VStack,
  ListItem,
  List,
  Image,
  Box,
  Center,
  Link,
  Flex,
} from "@chakra-ui/react";

export default function CoSoVatChat() {
  return (
    <>
      <Head>
        <title>Cơ sở vật chất</title>
      </Head>
      <Container maxW={"container.lg"}>
        <StackStyle>
          <Text fontSize={"4xl"}>Cơ sở vật chất nha khoa Pasteur</Text>
          <Text>
            Nha khoa Pasteur tự hào luôn đi đầu và phát triển các công nghệ nha
            khoa hiện đại nhất hiện nay. Trải qua gần 20 năm thành lập và phát
            triển, chúng tôi đã bảo vệ, chăm sóc sức khỏe răng miệng và nụ cười
            thẩm mỹ cho hơn <b>30.000 khách hàng.</b> Đến với Pasteur, bạn sẽ
            được khám chữa bệnh và làm răng thẩm mỹ trong mô hình phòng khám
            chuẩn 5 sao, xứng tầm đẳng cấp quốc tế.
          </Text>
        </StackStyle>

        <StackStyle>
          <TextHeader>HỆ THỐNG MÁY MÓC HIỆN ĐẠI</TextHeader>
          <List spacing={3}>
            <ListItem fontWeight={"bold"}>
              Máy chụp X-quang CT Cone Beam
            </ListItem>
            <ListItem>
              Cho hình ảnh không gian 3 chiều, có độ tương phản và phân giải
              cao, giúp bác sĩ khảo sát, chuẩn đoán và đưa ra liệu trình điều
              trị phù hợp.
            </ListItem>

            <ListItem>
              <Center flexDir={"column"}>
                <Image src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/phong-chup-phim-x-quang-tai-nha-khoa-Viet-Uc-2.png" />
                <Text as="cite">
                  Phòng chụp phim X-quang CT Cone Beam tại nha khoa Pasteur
                </Text>
              </Center>
            </ListItem>

            <ListItem fontWeight={"bold"}>
              Máy Scan trong miệng Trios 3
            </ListItem>
            <ListItem>
              Tự động so màu răng và thiết lập hình ảnh 3D, lấy dấu răng chính
              xác 100%, giúp bác sĩ lên kế hoạch điều trị chính xác nhất.
            </ListItem>

            <ListItem fontWeight={"bold"}>Máy cắm ghép Implant</ListItem>
            <ListItem>
              Đảm bảo quá trình cấy ghép Implant diễn ra an toàn, nhanh chóng,
              chính xác.
            </ListItem>

            <ListItem fontWeight={"bold"}>Máy Acteon</ListItem>
            <ListItem>
              Ứng dụng trong phẫu thuật, không gây đau đớn, khó chịu cho khách
              hàng sau phẫu thuật.
            </ListItem>
            <ListItem>
              <Center flexDir={"column"}>
                <Image src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/may-phau-thuat-cuoi-ho-loi-Acteon.png" />
                <Text as="cite">Máy Acteon</Text>
              </Center>
            </ListItem>

            <ListItem fontWeight={"bold"}>Máy in 3D</ListItem>
            <ListItem>
              Ứng dụng trong việc in khay định hướng phẫu thuật trong công nghệ
              trồng răng Implant Itech – Đảm bảo vị trí và hướng cắm Implant
              chính xác 100%, không bị lệch lạc.
            </ListItem>

            <ListItem fontWeight={"bold"}>Phần mềm nha khoa hiện đại</ListItem>
            <ListItem>
              Nha khoa Pasteur hiện tại đang sử dụng những phần mềm nha khoa ứng
              dụng công nghệ cao như 3shape , Exocad, Dophin, Smile Design,
              Dental Wing, Invivo 5 giúp khách hàng biết trước được kết quả điều
              trị của mình thông qua những hình ảnh trực quan nhất.
            </ListItem>
            <ListItem>
              <Center flexDir={"column"}>
                <Image src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/co-so-vat-chat-nha-khoa-Viet-Uc-phong-cho.jpg" />
                <Text as="cite">
                  Phòng chờ dành cho khách hàng đến khám và điều trị tại nha
                  khoa
                </Text>
              </Center>
            </ListItem>
          </List>
        </StackStyle>

        <StackStyle>
          <TextHeader>HỆ THỐNG PHÒNG KHÁM SANG TRỌNG, HIỆN ĐẠI</TextHeader>
          <List spacing={3}>
            <ListItem fontWeight={"bold"}>Phòng Vip</ListItem>
            <ListItem>
              Rộng rãi, thoáng mát. Không gian sang trọng, kín đáo. Trang thiết
              bị hiện đại.
            </ListItem>

            <ListItem fontWeight={"bold"}>Phòng phẫu thuật</ListItem>
            <ListItem>
              Được vô trùng tuyệt đối, đảm bảo an toàn cho bệnh nhân trong quá
              trình phẫu thuật.
            </ListItem>

            <ListItem>
              <Center>
                <Image src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/co-so-vat-chat-nha-khoa-Viet-Uc-anh-phong-doi.png" />
              </Center>
            </ListItem>

            <ListItem fontWeight={"bold"}>Phòng khám chữa bệnh</ListItem>
            <ListItem>
              Được trang bị trang thiết bị hiện đại. Sử dụng ghế nha khoa làm từ
              chất liệu da cao cấp đem đến sự thoải mái và dễ chịu.
            </ListItem>

            <ListItem fontWeight={"bold"}>Phòng vô trùng khép kín</ListItem>
            <ListItem>
              Tất cả các dụng cụ điều trị đều được hấp và khử trùng trong phòng
              khép kín, đảm bảo an toàn tuyệt đối, không lây lan các bệnh truyền
              nhiễm.
            </ListItem>

            <ListItem fontWeight={"bold"}>
              ĐỘI NGŨ BÁC SỸ CHUYÊN MÔN CAO, GIÀU KINH NGHIỆM
            </ListItem>
            <ListItem>
              Nha khoa Pasteur quy tụ đội ngũ y – bác sĩ giỏi, tốt nghiệp chuyên
              khoa răng hàm mặt tại các trường y khoa nổi tiếng trong và ngoài
              nước. Với kiến thức chuyên môn vững vàng, kỹ năng thành thạo cùng
              sự tận tâm với nghề, chúng tôi luôn mang đến những kết quả tốt
              nhất cho khách hàng.
            </ListItem>

            <ListItem>
              Đội ngũ bác sĩ của nha khoa cũng luôn chú trọng việc trau dồi,
              nâng cao năng lực chuyên môn, thường xuyên tham gia các khoá đào
              tạo chuyên sâu tại nước ngoài để luôn cập nhật những công nghệ
              khám chữa bệnh tiên tiến, hiện đại. Nếu bạn đang gặp các vấn đề về
              răng miệng, bạn muốn cải thiện thẩm mỹ nụ cười, hãy đến với nha
              khoa Pasteur ngay hôm nay để được khám và tư vấn cụ thể!
            </ListItem>

            <ListItem fontWeight={"bold"}>
              Nha khoa Pasteur – Nụ cười tiếp bước thành công!
            </ListItem>

            <ListItem fontWeight={"bold"}>
              Hotline: 1800.6279 – 09 456 9999 0 (Tư vấn miễn phí 24/7)
            </ListItem>

            <ListItem fontWeight={"bold"}>
              Website: <Link color={"blue.600"}>https://nhakhoavietuc.com</Link>
            </ListItem>

            <ListItem fontWeight={"bold"}>
              Facebook:{" "}
              <Link color={"blue.600"} href="/">
                Fb.com/nhakhoavietuc
              </Link>
            </ListItem>
          </List>
        </StackStyle>

        <Box mb={5}>
          <List spacing={3}>
            <ListItem>
              <TextHeader>Nha Khoa Pasteur</TextHeader>
            </ListItem>
            <ListItem>
              Địa chỉ: 630 Trường Chinh – Ngã Tư Sở – Đống Đa – Hà Nội
            </ListItem>
            <ListItem>Tel: 04.3564.1981 – 09.456.9999.0</ListItem>
            <ListItem>Email: nhakhoavietuc@gmail.com</ListItem>
            <ListItem>Website: https://nhakhoavietuc.com/</ListItem>
            <ListItem>FB: Fb.com/nhakhoavietuc.com/</ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
}

const TextHeader = ({ children, ...props }) => {
  return (
    <Text
      sx={{
        fontSize: "3xl",
        fontWeight: "bold",
        mt: 5,
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

const TextContent = ({ children, ...props }) => {
  return (
    <Text
      sx={{
        fontSize: "2xl",
        fontWeight: "bold",
        fontStyle: "italic",
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

const StackStyle = ({ children, ...props }) => {
  return (
    <VStack spacing={3} alignItems={"flex-start"} {...props}>
      {children}
    </VStack>
  );
};
