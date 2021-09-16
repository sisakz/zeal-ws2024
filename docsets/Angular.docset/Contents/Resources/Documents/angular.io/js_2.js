
    // Dynamically, pre-emptively, add `noindex`, which will be removed when the doc is ready and valid
    tag = document.createElement('meta'); tag.name = 'robots'; tag.content = 'noindex';
    document.head.appendChild(tag);
  