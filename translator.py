import json

with open("data/paragraf4.json", encoding="utf8") as f:
    lines = f.readlines()
f.close()
json_data = "".join(lines)
data = json.loads(json_data)

new_data = []
for idx, item in enumerate(data):
    if "number" in item:
        new_item = {
            "number": item["number"],
            "question": item["question"],
            "answers": item["answers"],
        }
    else:
        new_item = {
            "number": idx + 1,
            "question": item["question"],
            "answers": [],
        }
        for answer in item["answers"]:
            new_item["answers"].append(
                {
                    "text": answer["text"],
                    "correct": answer["right"],
                }
            )
    new_item["answers"] = sorted(new_item["answers"], key=lambda d: d["text"])
    print(new_item)
    new_data.append(new_item)

json_object = json.dumps(new_data, indent=2, ensure_ascii=False)
with open("paragraf4.json", "w", encoding="utf8") as outfile:
    outfile.write(json_object)
