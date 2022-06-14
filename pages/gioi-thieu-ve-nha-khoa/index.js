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
} from "@chakra-ui/react";

export default function GioiThieu() {
  return (
    <>
      <Head>
        <title>Giới thiệu</title>
      </Head>
      <Container maxW={"container.lg"}>
        <StackStyle>
          <Text fontSize={"4xl"}>
            Nha Khoa Pasteur – Nha khoa uy tín hàng đầu Việt Nam
          </Text>
          <Text>
            <b>Nha khoa Pasteur</b> được thành lập năm 2007 bởi Ths. Bs. Nguyễn
            Mạnh Phú – Chuyên gia hàng đầu trong lĩnh vực nha khoa tại Việt Nam
            và hiện là giảng viên khoa răng hàm mặt – Đại học Y Hà Nội. Với hơn
            10 năm hình thành và phát triển, Pasteur đã nhanh chóng trở nha khoa
            uy tín số 1 tại Việt Nam. Là nơi gửi gắm nụ cười của hàng triệu
            khách hàng trong nước và quốc tế.
          </Text>
        </StackStyle>

        <StackStyle>
          <TextHeader>1. Tầm nhìn</TextHeader>
          <List spacing={3}>
            <ListItem>
              – Thấu hiểu được tầm quan trọng của việc chăm sóc răng miệng, nha
              khoa Pasteur luôn không ngừng nâng cao chuyên môn, cập nhật công
              nghệ, kỹ thuật và trang thiết bị hiện đại để đem đến cho Quý khách
              hàng dịch vụ chăm sóc răng miệng và thẩm mỹ nụ cười theo tiêu
              chuẩn quốc tế 5*.
            </ListItem>
            <ListItem>
              – Chúng tôi luôn hoạt động với phương châm đặt sức khỏe răng miệng
              lên hàng đầu, luôn đưa ra những phương pháp điều trị giúp bảo tồn
              sức khỏe răng thật tốt nhất cho khách hàng. Nói không với trào lưu
              bọc răng sứ thẩm mỹ phải điều trị tủy, gây ảnh hưởng nghiêm trọng
              đến sức khỏe răng miệng.
            </ListItem>
          </List>
        </StackStyle>

        <StackStyle>
          <TextHeader>2. Sứ mệnh mục tiêu</TextHeader>
          <List spacing={3}>
            <ListItem>
              + Đối với khách hàng: Đem đến cho Quý khách hàng quy trình khám,
              chữa bệnh và làm răng thẩm mỹ ứng dụng công nghệ cao, nhanh chóng,
              chính xác và đảm bảo an toàn tuyệt đối.
            </ListItem>
            <ListItem>
              + Đối với xã hội: Nâng tầm nụ cười Việt, nâng cao nhận thức về tầm
              quan trọng của việc chăm sóc sức khỏe răng miệng.
            </ListItem>
          </List>
        </StackStyle>

        <StackStyle>
          <StackStyle>
            <TextHeader>
              3. Tại sao hàng triệu khách hàng đặt trọn niềm tin vào Nha Khoa
              Pasteur?
            </TextHeader>
            <TextContent>Đội ngũ y bác sĩ</TextContent>
            <List spacing={3}>
              <ListItem>
                Nha khoa Pasteur quy tụ đội ngũ y bác sĩ giỏi, giàu kinh nghiệm,
                được đào tạo chuyên sâu tại các trường y khoa nổi tiếng như Đại
                học Y Hà Nội, Harvard – Mỹ, Bordeaux – Pháp.
              </ListItem>
              <ListItem>
                Không chỉ giỏi chuyên môn mà các bác sĩ còn không ngừng nỗ lực
                học hỏi, thường xuyên tham gia các hội thảo quốc tế để nâng cao
                trình độ chuyên môn, phát huy giá trị cốt lõi của người bác sĩ:
                “Tâm – Tài – Nhẫn”.
              </ListItem>
            </List>
          </StackStyle>

          <StackStyle>
            <TextContent>Dịch vụ thế mạnh</TextContent>
            <Text>
              Nha khoa Pasteur luôn đi đầu trong việc ứng dụng các công nghệ nha
              khoa tân tiến, ưu việt nhất thế giới. Một số dịch vụ nha khoa thế
              mạnh tại Pasteur như:
            </Text>
            <List spacing={3}>
              <ListItem>
                + Trồng răng Implant I – Tech – Không sưng, không đau, có răng
                ăn nhai ngay sau khi trồng răng implant.
              </ListItem>
              <ListItem>
                + Trồng răng toàn hàm All on 4, All on 6 – Có răng toàn hàm,
                chắc khỏe như răng thật.
              </ListItem>
              <ListItem>
                + Niềng răng trong suốt Invisalign – Không lộ mắc cài, tiết kiệm
                thời gian.
              </ListItem>
              <ListItem>
                + Điều trị bọc răng sứ hỏng – Khắc phục tình trạng viêm lợi, đen
                viền chân răng.
              </ListItem>
              <ListItem>
                + Dán sứ Veneer – Mặt dán sứ siêu mỏng, không phải mài răng.
              </ListItem>
              <ListItem>
                + Thiết kế nụ cười Smile Design – Biết trước kết quả thẩm mỹ, nụ
                cười chuẩn phong thủy, chuẩn tỉ lệ vàng.
              </ListItem>
            </List>
          </StackStyle>

          <StackStyle>
            <TextContent>Cơ sở vật chất theo tiêu chuẩn quốc tế</TextContent>
            <List>
              <ListItem>
                + 100% thiết bị hiện đại được nhập khẩu trực tiếp từ Châu Âu như
                máy cắm ghép răng Implant, máy phẫu thuật cắt lợi Acteon, máy
                scan trong miệng Trios 3, phần mềm Smile Design – thiết kế nụ
                cười chuẩn tỉ lệ vàng,…
              </ListItem>
              <ListItem>
                + Phòng ốc trang nhã, hiện đại, được thiết kế phù hợp với từng
                chức năng như phòng điều trị, phòng phẫu thuật, phòng chỉnh
                nha,… đem đến cảm giác thoải mái và yên tâm cho khách hàng.
              </ListItem>
            </List>
          </StackStyle>

          <StackStyle>
            <TextContent>
              Dịch vụ chăm sóc khách hàng tận tình – chu đáo
            </TextContent>
            <List>
              <ListItem>
                Bạn sẽ được tư vấn và giải đáp thắc mắc miễn phí 24/7, được
                hướng dẫn tận tình về quy trình khám chữa bệnh, chế độ chăm sóc
                răng miệng sau khi điều trị tại nha khoa. Đặc biệt, bạn có thể
                theo dõi quá trình điều trị của mình qua hồ sơ bệnh án điện tử
                mà không phải đến trực tiếp nha khoa.
              </ListItem>
              <ListItem>
                Nha khoa Pasteur còn có nhiều chính sách hỗ trợ khách hàng như
                kiểm tra định kỳ miễn phí, trả góp lãi suất 0%, hỗ trợ xe đưa
                đón tận nơi nếu quý khách hàng có nhu cầu.
              </ListItem>
            </List>
          </StackStyle>
        </StackStyle>

        <Box>
          <TextHeader>Một số hình ảnh thực tế tại Pasteur</TextHeader>
          <StackStyle alignItems="center" spacing={10}>
            <Image src="https://nhakhoavietuc.com/wp-content/uploads/2015/12/all-on-4.jpg" />

            <Image src="https://nhakhoavietuc.com/wp-content/uploads/2015/12/benh-nhan-chinh-nha-2.jpg" />

            <Image src="https://nhakhoavietuc.com/wp-content/uploads/2015/12/benh-nhan-chinh-nha-sau.png" />
          </StackStyle>
        </Box>

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
        marginY: 5,
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
