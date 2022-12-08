function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(item, items) {
    let idx = items.findIndex(i => i === item);
    return [...items.slice(0, idx), ...items.slice(idx + 1)]
}

export {choice, remove};