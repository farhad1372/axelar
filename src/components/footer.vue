<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="border-top next-prev-pages mt-16 pt-6 d-flex flex-wrap justify-space-between"
          >
            <div>
              <img src="@/assets/icons/text-logo.png" style="width: 150px; height: auto" />
              <p class="small" style="margin-top: -30px;">
                Axelar Analytics Panel  <br />
                Designed and coded with
                <i class="isax isax-heart" style="font-size: 0.9rem; color: red"></i> by
                <span>Azin Rezaee</span>
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.next-prev-pages {
  padding-bottom: 100px;
}

a {
  border: 1px solid #dadde1;
  display: inline-flex !important;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s ease;
  min-width: 300px;
  padding: 20px 40px;
  margin-bottom: 10px !important;

  &.previous {
    text-align: left;
  }

  &.next {
    text-align: right;
  }

  &:hover {
    border-color: rgba(var(--vs-primary));
    -webkit-box-shadow: 0 0 0 0px rgba(var(--vs-primary));
    box-shadow: 0 0 0 0px rgba(var(--vs-primary));
  }
}
</style>
