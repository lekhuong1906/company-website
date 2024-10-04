<template>
  <main class="mt-[100px]">
    <section class="flex gap-4 bg-blue-100 justify-center py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-blue-900">
          We deliver goods to
        </h1>
        <br>
        <span class="text-blue-700">where they need to be.</span>
      </div>
      <div class="h-[400px] w-fit flex items-center justify-center">
        <img class="w-fit h-full bg-cover" :src="img_ceo" alt="">
      </div>
    </section>

    <section class="bg-blue-white py-24 flex flex-col items-center justify-center mt-[50px]">
      <h1 class="text-4xl lg:text-7xl font-bold text-primary-blue mb-6">
        Khám phá sức mạnh công nghệ
      </h1>
      <div class="px-32">
        <p class="text-lg text-gray-600 mb-8">
          Chúng tôi là một đội ngũ đam mê về công nghệ, tận dụng cả sự sáng tạo của bản thân và sức mạnh của công nghệ tiên tiến để tạo ra những giải pháp đột phá đồng thời mang lại giá trị thực cho khách hàng của chúng tôi. 
        </p>

        <p>
          Optimizer VN không chỉ tập trung vào việc xây dựng sản phẩm và dịch vụ, mà bên cạnh đó chúng tôi còn nghĩ phải làm như thế nào để có thể hướng tới việc tạo ra những trải nghiệm mới cho người dùng và mở ra cánh cửa cho sự tiến bộ.
        </p>
        <br>
        <p>
          Để phân tích kỹ hơn, thì sứ mệnh của chúng tôi đặt ra là thúc đẩy sự phát triển bền vững thông qua sự sáng tạo và ứng dụng hiệu quả của công nghệ. Chúng tôi cam kết rằng sẽ đến những giải pháp thông minh và tiên tiến, giúp nâng cao năng suất, tối ưu hóa quy trình làm việc và tạo ra giá trị cho cộng đồng.
        </p>
      </div>
    </section>

  </main>
</template>

<script setup>
import img_ceo from '../../assets/images/anhlam_sticker.png'


</script>

<style>
@media (min-width: 1024px) {
  .about {
    /* background-image: url('../../assets/images/Temple-Background.png'); */
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
