<template>
  <main>
    <section class="bg-white py-24 flex items-center justify-center mt-[100px]">
      <div class="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <!-- Left Content -->
        <div class="flex flex-col gap-4">
          <h1 class="text-7xl lg:text-7xl font-bold text-primary-blue mb-6">
            OPTIMIZER VIET NAM
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Optimizer VN là công ty công nghệ với nòng cốt là đội ngũ IT chuyên nghiệp. Với sự nhiệt huyết của tuổi trẻ,
            sẵn sàng học hỏi, làm việc không ngừng nghỉ và dám đương đầu với những thử thách, khó khăn để cùng nhau tạo
            ra giá trị mới.
          </p>
        </div>
        <!-- Right Image -->
        <div class="w-full lg:w-3/10 mt-12 lg:mt-0">
          <img :src="plan" alt="Paper Plane" class="w-full max-w-md mx-auto drop-shadow-lg">
        </div>
      </div>
    </section>

    <div class="h-3 w-64 mx-auto bg-gray-300 rounded-md"></div>

    <section class="bg-blue-white py-24 flex flex-col items-center justify-center mt-[50px]">
      <h1 class="text-4xl lg:text-7xl font-bold text-primary-blue mb-6">
        Giới thiệu
      </h1>
      <div class="px-32">
        <p class="text-lg text-gray-600 mb-8">
          Optimizer VN là công ty công nghệ với nòng cốt là đội ngũ IT chuyên nghiệp. Với sự nhiệt huyết của tuổi trẻ,
          sẵn sàng học hỏi, làm việc không ngừng nghỉ và dám đương đầu với những thử thách, khó khăn để cùng nhau tạo ra
          giá trị mới. Đồng thời mỗi nhân viên chúng tôi liên tục sáng tạo, đổi mới mỗi ngày để thực hiện tốt sứ mệnh
          chung của công ty.
        </p>

        <p>
          Bên cạnh đó, Optimizer VN mong muốn thông qua công nghệ sẽ đóng góp cho xã hội, giúp cuộc sống ngày càng tiên
          tiến hơn. Chúng tôi không ngừng nỗ lực để mang lại những giá trị mới, đáp ứng phù hợp với xu hướng công nghệ
          hóa chính là kim chỉ nam cho phương châm hoạt động của chúng tôi.
        </p>
      </div>
    </section>

    <section class="bg-white py-24 flex flex-col items-center justify-center mt-[50px]">
      <div class="flex justify-center items-center text-center py-40">
        <p class="text-4xl lg:text-7xl font-bold text-primary-blue">
          Tối ưu hóa chiến lược kinh tế bằng công nghệ và cung cấp sự đổi mới cho người dùng.
        </p>
      </div>
      <div class="flex text-center">
        <div class="h-40 w-40 flex items-center justify-center">
          <img :src="mission" alt="Mission">
        </div>
      </div>
    </section>

    <div class="h-2 w-full mx-auto bg-gray-300 rounded-md"></div>

    <section class="bg-primary-blue py-24 flex items-center justify-center">
      <Carousel />
    </section>

    <div class="h-2 w-full mx-auto bg-gray-300 rounded-md"></div>
  </main>
</template>


<script setup>
import Carousel from "@/components/Carousel.vue";
import plan from "../../assets/svg/paper-plane.svg"
import mission from "../../assets/svg/mission.svg"
import image_ceo from "../../assets/images/anhlam_sticker.png"


</script>
<style scoped></style>