// 实现 renderTemplate，功能如下：
// const result = renderTemplate('Hello, {{user.name}}!', {
//     user: { name: 'Alice' },
// });
// assert(result, 'Hello, Alice!');

function renderTemplate(template, data) {
    return template.replace(/\{\{(.*?)\}\}/g, (match, path) => {
        const keys = path.trim().split('.');
        let value = data;
        for (const key of keys) {
            if (value === undefined || value === null) break;
            value = value[key];
        }
        return value !== undefined ? value : '';
    });
}
