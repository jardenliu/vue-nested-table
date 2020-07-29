<template>
  <div class="sidebar example-sidebar">
      <div class="sidebar-container">
        <ul class="sidebar-items"> 
          <router-link class="sidebar-item" :to="{name:'Basic'}" tag="li">
            Basic
          </router-link>
           <router-link class="sidebar-item" :to="{name:'FixedHeader'}" tag="li">
            Fixed Header
          </router-link>
        </ul>
      </div>
  </div>
</template>

<style lang="stylus" scoped src="./sidebar.styl"></style>