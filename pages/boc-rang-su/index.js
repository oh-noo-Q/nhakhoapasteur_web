import React from "react";
import Head from "next/head";
import { Flex, Spacer } from "@chakra-ui/react";
import { IoCheckmarkOutline } from "react-icons/io5";
import styles from "./style.module.scss";

export default function BocRangSu() {
  return (
    <>
      <Head>
        <title>Bọc răng sứ</title>
      </Head>
      <Flex>
        <Spacer />
        <div className={styles["container"]}>
          <h1 className={styles["head-title"]}>
            Những kiến thức cơ bản về bọc răng sứ mà bạn cần biết
          </h1>
          <div className={styles["what-is"]}>
            <p>
              <b>Bọc răng sứ </b>
              là một phương pháp thẩm mỹ giúp khắc phục tình trạng răng hô, vẩu
              nhẹ, răng sâu, sứt mẻ, bị xỉn màu hiệu quả, đem đến nụ cười rạng
              rỡ và hàm răng trắng sáng. Nhưng không phải ai cũng có những hiểu
              biết đúng đắn và đầy đủ về bọc răng sứ thẩm mỹ. Nhiều người vẫn
              còn e ngại việc
              <b> bọc răng sứ </b>
              sẽ phải mài răng, dễ gây viêm nướu, hư hại răng thật. Những e ngại
              này liệu có đúng không?
            </p>
          </div>
          <img
            src="https://nhakhoavietuc.com/wp-content/uploads/2016/04/boc-rang-su-tham-my.jpg"
            style={{
              margin: "10px auto",
            }}
          />
          <h1 className={styles["blue-header"]}>
            <IoCheckmarkOutline className={styles["blue-header-icon"]} />
            Bọc răng sứ là gì ?
          </h1>
          <p>
            Làm răng sứ là một phương pháp thẩm mỹ giúp phục hình và cải thiện
            lại màu sắc của răng trong các trường hợp răng đã chữa tủy, răng bị
            bể nhiều, răng bị lệch lạc nhẹ, răng thưa,…với hình dáng và màu sắc
            giống như răng thật, bọc răng sứ không chỉ đảm bảo chức năng ăn nhai
            mà còn mang đến giá trị thẩm mỹ cho hàm răng của bạn.
          </p>
          <h1 className={styles["blue-header"]}>
            <IoCheckmarkOutline className={styles["blue-header-icon"]} />
            Những trường hợp nào nên bọc răng sứ?
          </h1>
          <p className={styles["inner-line"]}>
            Không phải ai cũng có thể làm răng sứ được. Thông thường, răng sứ
            được sử dụng trong các trường hợp sau:
          </p>
          <p className={styles["inner-line"]}>
            {" "}
            <IoCheckmarkOutline className={styles["green-check-icon"]} />
            Răng hỏng tủy, răng sâu bị vỡ lớn.
          </p>
          <p className={styles["inner-line"]}>
            {" "}
            <IoCheckmarkOutline className={styles["green-check-icon"]} />
            Răng hô móm nhẹ,thưa xấu hoặc sứt mẻ.
          </p>
          <p className={styles["inner-line"]}>
            {" "}
            <IoCheckmarkOutline className={styles["green-check-icon"]} />
            Răng bị mòn men nặng, bị xỉn màu vì nhiễm kháng sinh không thể tẩy
            trắng được.
          </p>
          <h1 className={styles["blue-header"]}>
            <IoCheckmarkOutline className={styles["blue-header-icon"]} />
            Bọc răng sứ có ảnh hưởng đến sức khỏe của răng không?
          </h1>
          <p>
            {" "}
            <IoCheckmarkOutline className={styles["green-check-icon"]} />
            <b>Làm răng sứ </b>
            là giải pháp phục hình thẩm mỹ và không để lại biến chứng cũng như
            không ảnh hưởng đến sức khỏe răng miệng của bạn. Thông thường với
            những trường hợp như răng sâu, răng sứt mẻ quá lớn thì làm răng sứ
            sẽ giúp bảo vệ răng thật tốt hơn. Đối với một số trường hợp, bọc
            răng sứ để răng bớt hô, vẩu nếu phải buộc lấy tủy răng thì nên niềng
            răng sẽ giúp bảo vệ răng thật tốt hơn.
          </p>
          <p>
            {" "}
            <IoCheckmarkOutline className={styles["green-check-icon"]} />
            Nếu như trước đây làm răng sứ phải mài khá nhiều cùi răng thì với sự
            ra đời của công nghệ CT 5 chiều cùng với các loại răng toàn sứ, mặt
            dán sứ Veneer giúp cho việc
            <b> bọc răng sứ </b>có độ chính xác cao, hạn chế tối đa việc mài
            răng, đảm bảo sức khỏe răng miệng tốt nhất.
          </p>
          <br />
          <p>
            Tuy nhiên, không phải nha khoa nào cũng được trang bị những kỹ thuật
            hiện đại này. Có không ít trường hợp <b>bọc răng sứ bị hỏng</b> dẫn
            đến hậu quả rất nghiêm trọng như:
          </p>
          <ul
            style={{
              listStyleType: "circle",
              paddingLeft: "20px",
            }}
          >
            <li>Bị viêm lợi, đen viền chân răng.</li>
            <li>
              Bọc răng sứ bị hở bọc, thức ăn thường xuyên nhét vào gây sâu răng,
              hôi miệng.
            </li>
            <li>
              Bọc răng sứ không chính xác, bị lệch lạc khiến việc ăn nhai gặp
              nhiều khó khăn.
            </li>
          </ul>
          <p>
            Để đảm bảo việc làm răng sứ của bạn đạt hiệu quả tốt nhất, bạn nên
            tìm đến những nha khoa uy tín, có đội ngũ bác sỹ giỏi và được trang
            bị công nghệ hiện đại. Trên thị trường hiện nay, có nhiều dòng răng
            sứ trôi nổi, không có nguồn gốc xuất xứ rõ ràng. Sử dụng răng sứ kém
            chất lượng cũng là một trong những nguyên nhân gây nên tình trạng
            bọc răng sứ hỏng và nhiều biến chứng khác không tốt cho răng miệng.
          </p>
          <p>
            Vì thế, hãy tìm hiểu thật kỹ thông tin về bác sĩ làm răng sứ, công
            nghệ của nha khoa cũng như vật liệu và uy tín của nha khoa đó để đảm
            bảo sức khỏe răng miệng và thẩm mỹ nụ cười của mình.
          </p>
          <h1 className={styles["blue-header"]}>
            <IoCheckmarkOutline className={styles["blue-header-icon"]} />
            Bọc răng sứ có đau không?
          </h1>
          <p>
            Bọc răng sứ có đau không luôn là nỗi lo lắng của khá nhiều khách
            hàng. Với kỹ thuật cũ, bọc răng sứ phải mài răng sẽ gây ra đau đớn,
            khó chịu cho bạn thì với công nghệ làm răng sứ hiện đại, mài răng
            bọc răng sứ sẽ không còn là nỗi lo lắng của bạn nữa.
          </p>
          <p>
            Đặc biệt, tại nha khoa Pasteur, ứng dụng công nghệ CT 5 chiều kết
            hợp với trình độ chuyên môn cao của bác sĩ, bọc răng sứ sẽ hạn chế
            tối đa việc mài răng, đảm bảo không xâm lấn đến tủy. Với nhiều
            trường hợp răng, răng đều đẹp, chỉ làm răng sứ để cải thiện màu sắc
            của răng thì sẽ không phải mài răng.
          </p>
          <h1 className={styles["blue-header"]}>
            <IoCheckmarkOutline className={styles["blue-header-icon"]} />
            Tại sao nên lựa chọn bọc răng sứ tại Pasteur?
          </h1>
          <p>
            Nếu bạn vẫn còn đang gặp khó khăn trong việc lựa chọn địa chỉ bọc
            răng sứ uy tín, hãy đến với nha khoa Pasteur!
          </p>
          <h3 className={styles["order-list"]}>1. Đội ngũ y bác sĩ giỏi</h3>
          <p>
            Với đội ngũ y bác sĩ được đào tạo chuyên sâu về thẩm mỹ tại các
            trường y khoa nổi tiếng như Đại học Y Hà Nội, Harvard – Mỹ, Bordeaux
            – Pháp,.. Pasteur đã đem đến nụ cười rạng rỡ cho hàng ngàn bệnh
            nhân, đem đến cho họ cuộc sống hạnh phúc hơn.
          </p>
          <h3 className={styles["order-list"]}>2. Cơ sở vật chất hiện đại</h3>
          <p>
            Nha khoa Pasteur trang bị nhiều trang thiết bị máy móc hiện đại như
            máy Trios – giúp lấy dấu răng chính xác đến từng micromet, phần mềm
            Smile Design – giúp biết trước kết quả thẩm mỹ. Bạn có thể lựa chọn
            màu sắc, hình dáng khuôn răng mà mình mong muốn trước khi tiến hành
            bọc răng sứ thẩm mỹ.
          </p>
          <h3 className={styles["order-list"]}>
            3. Chế độ chăm sóc khách hàng chu đáo
          </h3>
          <p>
            Với đội ngũ chăm sóc khách hàng nhiệt tình, tận tâm, chu đáo, bạn sẽ
            cảm thẩy thoải mái và yên tâm mỗi khi đến khám và điều trị tại nha
            khoa. Đồng thời, Pasteur còn có chế độ thăm khám và kiểm tra răng
            miệng định kỳ miễn phí cho bệnh nhân.
          </p>
        </div>
        <Spacer />
      </Flex>
    </>
  );
}
