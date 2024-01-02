<script setup>
defineProps(["file", "title", "author", "rating", "review"]);
</script>

<template>
  <div>
    <div>
      <router-link to="/">本棚へ</router-link>
    </div>
    <div>
      <div>
        <img :src="file" alt="本の画像" class="book-image" />
      </div>
      <div>
        <div>
            <p>{{ title }}（新潮文庫）</p>
            <p class="authorText">{{ author }}</p>
            <span>／著</span>
            <div class="labelRating">
              <span
                v-for="star in 5"
                :key="star"
                :class="{ selected: star <= rating }"
              ></span>
            </div>
            <p>{{ review }}</p>
        </div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>ジャンル: </td>
                        <td>文庫</td>
                    </tr>
                    <tr>
                        <td>出版社: </td>
                        <td>新潮社</td>
                    </tr>
                    <tr>
                        <td>発売日: </td>
                        <td>2005/4/24</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
