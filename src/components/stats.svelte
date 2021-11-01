<script>
    export let entityName = ""
    export let items = [];
</script>
<div class="container mx-auto mt-5 text-center shadow-md  rounded-xl">
    <div class="md:w-full w-72 rounded-lg md:stats flex-1 mx-auto sr">
        <div class="stat my-3 md:m-0 rounded-lg md:rounded-none">
            <div class="stat-figure text-primary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </div>
            <div class="stat-title">Total {entityName}</div>
            <div class="stat-value text-primary">{items.length}</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat my-3 md:m-0 rounded-lg md:rounded-none">
            <div class="stat-figure text-info">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            </div>
            <div class="stat-title">{entityName} Responses</div>
            <div class="stat-value text-info">2.2K</div>
            <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat my-3 md:m-0 rounded-lg md:rounded-none">
            <div class="stat-figure text-info">
                <!-- <div class="avatar online">
                    <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                        <img
                            src="/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component"
                            class="mask mask-squircle"
                        />
                    </div>
                </div> -->
            </div>
            <div class="stat-value">{(100 * (items.filter(x => x.active).length / items.length)).toFixed(1)}%</div>
            <div class="stat-title">Active {entityName}</div>
            <div class="stat-desc text-info">{items.filter(x => x.active).length } out of {items.length} {entityName.toLowerCase()} active</div>
        </div>
    </div>
</div>

