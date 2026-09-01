// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="commands.html"><strong aria-hidden="true">1.</strong> Command Line Usage</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="sets/index.html"><strong aria-hidden="true">1.1.</strong> Managing Repository and Relay Sets</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="sets/new.html"><strong aria-hidden="true">1.1.1.</strong> Create a Set</a></li><li class="chapter-item expanded "><a href="sets/update.html"><strong aria-hidden="true">1.1.2.</strong> Modify a Set</a></li><li class="chapter-item expanded "><a href="sets/show.html"><strong aria-hidden="true">1.1.3.</strong> Show Sets</a></li><li class="chapter-item expanded "><a href="sets/remove.html"><strong aria-hidden="true">1.1.4.</strong> Remove a Set</a></li></ol></li><li class="chapter-item expanded "><a href="config/index.html"><strong aria-hidden="true">1.2.</strong> Manage Configuration</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="config/pow.html"><strong aria-hidden="true">1.2.1.</strong> Default PoW Difficulty</a></li><li class="chapter-item expanded "><a href="config/relays.html"><strong aria-hidden="true">1.2.2.</strong> Fallback Relays</a></li><li class="chapter-item expanded "><a href="config/nip07.html"><strong aria-hidden="true">1.2.3.</strong> NIP-07 Browser Signer Proxy</a></li><li class="chapter-item expanded "><a href="config/bunker.html"><strong aria-hidden="true">1.2.4.</strong> NIP-46 Bunker</a></li><li class="chapter-item expanded "><a href="config/keyring.html"><strong aria-hidden="true">1.2.5.</strong> Secret Key Keyring</a></li></ol></li><li class="chapter-item expanded "><a href="repo/index.html"><strong aria-hidden="true">1.3.</strong> Manage Repositories</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="repo/announce.html"><strong aria-hidden="true">1.3.1.</strong> Broadcast and Update a Git Repository</a></li><li class="chapter-item expanded "><a href="repo/view.html"><strong aria-hidden="true">1.3.2.</strong> View Git Repository Details</a></li><li class="chapter-item expanded "><a href="repo/state.html"><strong aria-hidden="true">1.3.3.</strong> Repository State Announcements</a></li></ol></li><li class="chapter-item expanded "><a href="reply.html"><strong aria-hidden="true">1.4.</strong> Reply to Issues and Patches</a></li><li class="chapter-item expanded "><a href="issue/index.html"><strong aria-hidden="true">1.5.</strong> Issue Management</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="issue/new.html"><strong aria-hidden="true">1.5.1.</strong> Create an Issue</a></li><li class="chapter-item expanded "><a href="issue/view.html"><strong aria-hidden="true">1.5.2.</strong> View an Issue</a></li><li class="chapter-item expanded "><a href="issue/reopen.html"><strong aria-hidden="true">1.5.3.</strong> Reopen an Issue</a></li><li class="chapter-item expanded "><a href="issue/close.html"><strong aria-hidden="true">1.5.4.</strong> Close an Issue</a></li><li class="chapter-item expanded "><a href="issue/resolve.html"><strong aria-hidden="true">1.5.5.</strong> Resolve an Issue</a></li><li class="chapter-item expanded "><a href="issue/list.html"><strong aria-hidden="true">1.5.6.</strong> List Issues</a></li></ol></li><li class="chapter-item expanded "><a href="patch/index.html"><strong aria-hidden="true">1.6.</strong> Patch Management</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="patch/send.html"><strong aria-hidden="true">1.6.1.</strong> Send Patches to a Repository</a></li><li class="chapter-item expanded "><a href="patch/fetch.html"><strong aria-hidden="true">1.6.2.</strong> Fetch a Patch</a></li><li class="chapter-item expanded "><a href="patch/close.html"><strong aria-hidden="true">1.6.3.</strong> Close a Patch</a></li><li class="chapter-item expanded "><a href="patch/draft.html"><strong aria-hidden="true">1.6.4.</strong> Convert to Draft</a></li><li class="chapter-item expanded "><a href="patch/reopen.html"><strong aria-hidden="true">1.6.5.</strong> Reopen a Patch</a></li><li class="chapter-item expanded "><a href="patch/apply.html"><strong aria-hidden="true">1.6.6.</strong> Mark as Applied</a></li><li class="chapter-item expanded "><a href="patch/merge.html"><strong aria-hidden="true">1.6.7.</strong> Mark as Merged</a></li><li class="chapter-item expanded "><a href="patch/list.html"><strong aria-hidden="true">1.6.8.</strong> List Patches</a></li></ol></li><li class="chapter-item expanded "><a href="pr/index.html"><strong aria-hidden="true">1.7.</strong> Pull Request Management</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="pr/new.html"><strong aria-hidden="true">1.7.1.</strong> Create a Pull Request</a></li><li class="chapter-item expanded "><a href="pr/update.html"><strong aria-hidden="true">1.7.2.</strong> Update a Pull Request</a></li><li class="chapter-item expanded "><a href="pr/view.html"><strong aria-hidden="true">1.7.3.</strong> View a Pull Request</a></li><li class="chapter-item expanded "><a href="pr/list.html"><strong aria-hidden="true">1.7.4.</strong> List Pull Requests</a></li><li class="chapter-item expanded "><a href="pr/close.html"><strong aria-hidden="true">1.7.5.</strong> Close a Pull Request</a></li><li class="chapter-item expanded "><a href="pr/draft.html"><strong aria-hidden="true">1.7.6.</strong> Convert to Draft</a></li><li class="chapter-item expanded "><a href="pr/reopen.html"><strong aria-hidden="true">1.7.7.</strong> Reopen a Pull Request</a></li><li class="chapter-item expanded "><a href="pr/apply.html"><strong aria-hidden="true">1.7.8.</strong> Mark as Applied</a></li><li class="chapter-item expanded "><a href="pr/merge.html"><strong aria-hidden="true">1.7.9.</strong> Mark as Merged</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
